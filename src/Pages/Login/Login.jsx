import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const { logIn } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(loggedUser);
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successfully!!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleValidteCaptcha = (e) => {
        const userCaptchaValue = e.target.value

        if (validateCaptcha(userCaptchaValue) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss|Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidteCaptcha} type="text" name='captcha' placeholder="Type Captcha" className="input input-bordered" />
                                {/* <button className="btn btn-outline btn-xs mt-2">Validate</button> */}

                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" value="Login" className='btn btn-primary' />
                            </div>
                        </form>
                        <p className='text-center p-4'><small>New Here? <Link to='/signup'> Create an Account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;