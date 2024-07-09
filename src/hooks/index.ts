import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { validations } from "../validations";

export interface IForm {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const useApp = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IForm>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validations) as any,
    criteriaMode: "all",
    mode: "all"
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_value: IForm) => {
    //cleanForm();
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const subscription = watch((_value: any) => {});
    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    isValid,
    register,
    errors,
    handleSubmit,
    onSubmit
  };
};

export default useApp;
