import { Formik, useFormik } from "formik";

const LogIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    });
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit">Submit</button>
            </form>
        </div>  
    )
}



export default LogIn;