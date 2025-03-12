import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    age : yup.number().required("Age is required"),
    password: yup.string().min(8,).required("Password is required")
})