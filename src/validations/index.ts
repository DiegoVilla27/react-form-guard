import * as yup from "yup";

export const validations = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Min: 3")
    .max(20, "Max: 20"),
  age: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Min: 18")
    .max(100, "Max: 100"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .max(100, "Max: 100"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min: 8")
    .max(20, "Max: 20")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,30}$/,
      "Password must contain at least one uppercase letter, one lowercase letter and one digit without spaces."
    ),
  passwordConfirm: yup
    .string()
    .required("Password confirm is required")
    .oneOf([yup.ref("password")], "Passwords must match")
});
