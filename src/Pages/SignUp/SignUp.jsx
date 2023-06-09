import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';





const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        const name = data.name;
        const photoUrl = data.photoUrl
        const email = data.email;
        const password = data.password
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                updateUserProfile(name, photoUrl)
                    .then(() => {
                        console.log("Updated profile");
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Created Succefully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        navigate('/')

                    })
                    .catch(error => {
                        console.log(error.message);
                    })

            })
            .catch(error => {
                console.log(error.message);
            })

    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss|SignUp</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name"  {...register("name", { required: true })} name='name' className="input input-bordered" />
                                {errors.name && <span className='text-red-400'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="PhotoUrl"  {...register("photoUrl", { required: true })} className="input input-bordered" />
                                {errors.photoUrl && <span className='text-red-400'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                })} name='password' placeholder="password" className="input input-bordered" />
                                {/* password reqired  */}
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                {/* password minlength  */}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 Charecters</p>}
                                {/* password maxLength  */}
                                {errors.password?.type === 'maxLength' && <p
                                    className='text-red-500'>Password Length max 20  Charecters</p>}
                                {/* password pattern  */}
                                {errors.password?.type === 'pattern' && <p
                                    className='text-red-500'>Password must have One Uppercase,One LowerCase,One number and One special Charecter</p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" className='btn btn-primary' value="SignUp" />
                            </div>
                        </form>
                        <p className='text-center p-4'><small>Already Have an account? <Link to='/login'>Login Here</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;