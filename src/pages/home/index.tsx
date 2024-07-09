import { ErrorMessageCustom } from "../../components/msg-error";
import { ShowQuestion } from "../../helpers/sweetalert";
import useApp from "../../hooks";
import { useFormUnsaved } from "../../hooks/form-unsaved";
import LayoutPages from "../../layouts";

export const HomePage = () => {
  const { reset, isValid, isDirty, register, errors, handleSubmit, onSubmit } =
    useApp();
  const { blocker } = useFormUnsaved({ isDirty });

  return (
    <LayoutPages>
      <>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <h1>Register</h1>
          <input
            {...register("name")}
            className={errors["name"] ? "input-error" : ""}
            type="string"
            placeholder="Name"
          />
          {ErrorMessageCustom(errors, "name")}
          <input
            {...register("age")}
            className={errors["age"] ? "input-error" : ""}
            type="number"
            placeholder="Age"
          />
          {ErrorMessageCustom(errors, "age")}
          <input
            {...register("email")}
            className={errors["email"] ? "input-error" : ""}
            type="email"
            placeholder="Email"
          />
          {ErrorMessageCustom(errors, "email")}
          <input
            {...register("password")}
            className={errors["password"] ? "input-error" : ""}
            type="password"
            placeholder="Password"
          />
          {ErrorMessageCustom(errors, "password")}
          <input
            {...register("passwordConfirm")}
            className={errors["passwordConfirm"] ? "input-error" : ""}
            type="password"
            placeholder="Confirm password"
          />
          {ErrorMessageCustom(errors, "passwordConfirm")}
          <button
            type="submit"
            disabled={!isValid}
          >
            Register
          </button>
        </form>
        {blocker.state === "blocked"
          ? ShowQuestion(
              "¿Estás seguro que deseas abandonar la página? Perderás los datos que no estén guardados.",
              () => {
                blocker.proceed();
                reset();
              },
              () => {
                blocker.reset();
              }
            )
          : null}
      </>
    </LayoutPages>
  );
};

export default HomePage;
