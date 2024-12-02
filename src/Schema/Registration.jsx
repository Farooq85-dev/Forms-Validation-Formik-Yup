import * as Yup from "Yup";

export const registrationSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Name!"),
  email: Yup.string().email().required("Please Enter Email!"),
  password: Yup.string().min(6).max(12).required("Please Enter Password!"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Must Match!"),
});
