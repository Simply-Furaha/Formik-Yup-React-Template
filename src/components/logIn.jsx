import { useFormik } from "formik";
import { basicSchema} from "./valyup";
import React from 'react';

const onSubmit = () => {
    console.log("I have been submitted")
}


const LogIn = () => {
    const {values, touched, handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            email: '',
            age : '',
            password: ''
        },
       
        validationSchema: basicSchema,
        onSubmit,
    });
      
    console.log(errors)
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className={errors.email ? "border-red-500" : ""}
                /> 
                {errors.email && touched.email && <p>{errors.email}</p>}
                <br />
                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                    value={values.age}
                /> 
                {errors.age && touched.age && <p>{errors.age}</p>}
                <br />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                /> 
                {errors.password && touched.password && <p>{errors.password}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>  
    )
}



export default LogIn;