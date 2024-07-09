import { ErrorMessageCustom } from "./components/msg-error";
import useApp from "./hooks";

function App() {
  const { isValid, register, errors, handleSubmit, onSubmit } = useApp();

  return (
    <div>
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
    </div>
  );
}

export default App;
