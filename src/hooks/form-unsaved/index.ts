import { useEffect } from "react";
import { useBlocker } from "react-router-dom";

interface IProps {
  isDirty: boolean;
}

interface ILocations {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentLocation: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nextLocation: any;
}

export const useFormUnsaved = ({ isDirty }: IProps) => {
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }: ILocations) =>
      isDirty && currentLocation.pathname !== nextLocation.pathname
  );

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return {
    blocker
  };
};
