import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../redux/auth-reducer.js';
import { Navigate } from 'react-router-dom';


const Login = (props) => {
    if (props.isAuth ) {
        console.log('login')
            return <Navigate to={'/profile/' + props.id}/>
    }
    return (<div>
        <h1>Login</h1>
        <SignUpForm loginThunkCreator={props.loginThunkCreator}/>
    </div>)
    };

const SignUpForm = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}

        validationSchema={
            Yup.object({
                email: Yup.string().email('некорректный емаил').required('Обязательное поле'),
                password: Yup.string().min(3, 'минимум 3 символа').required('Обязательное поле')
            })}

        onSubmit={
            (values, {setStatus, setSubmitting}) => {
                console.log('------------')
                props.loginThunkCreator(values.email, values.password, values.rememberMe, setStatus);
                setSubmitting(false)
                console.log('------------')
                console.log(JSON.stringify(values, null, 2));
                console.log('------------')
            }
        }>
        {(formik) => (
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>{(formik.status)? <div>{formik.status.status[0]}</div> : null }</div>
                    <label htmlFor={'email'}>email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor={'password'}>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>) : null}
                </div>
                <div>
                    <label htmlFor={'rememberMe'}>remember Me</label>
                    <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.rememberMe}
                    />
                </div>
                <button disabled={formik.isSubmitting} type="submit">Submit</button>
            </form>)}
        </Formik>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id
})

export default connect(mapStateToProps, {loginThunkCreator})(Login);