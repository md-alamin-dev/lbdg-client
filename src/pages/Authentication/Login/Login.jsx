import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaPhoneAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../providers/AuthContext/AuthContext';

const Login = () => {

    const { LogIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setLoginError(''); // Reset error state on new attempt
    
        try {
            // Call LogIn from AuthContext
            await LogIn(data.email, data.password);
            navigate('/'); // Redirect to home page on successful login
        } catch (error) {
            console.error("Error during login:", error);  // Log the full error for debugging
    
            // Handle specific Firebase errors
            switch (error.code) {
                case 'auth/user-not-found':
                    setError('email', { message: 'No account found with this email.' });
                    break;
                case 'auth/wrong-password':
                    setError('password', { message: 'Incorrect password. Please try again.' });
                    break;
                case 'auth/invalid-email':
                    setError('email', { message: 'Invalid email format. Please check your email.' });
                    break;
                case 'auth/too-many-requests':
                    setLoginError('Too many attempts. Please try again later.');
                    break;
                default:
                    setLoginError(`An unexpected error occurred: ${error.message || error.code}`);
            }
        }
    };
    

    return (

        <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-6 h-screen md:p-6 md:my-10">

            <div className='w-full h-full md:w-1/3 p-6 md:p-0 md:mx-10'>

                <div className="w-full mx-auto px-6 py-8 bg-white border border-[#FF0000] shadow-md rounded-lg">

                    <h2 className="text-3xl md:text-5xl font-semibold mb-4 pb-4 bg-gradient-to-r from-[#FF0000] to-[#8B0000] bg-clip-text text-transparent">
                        Login Now
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Email Field */}
                        <div className="mb-4">

                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 w-full border border-[#FF0000] rounded-md"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^@]+@[^@]+\.[^@]+$/,
                                        message: 'Enter a valid email address'
                                    }
                                })}
                            />

                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

                        </div>

                        {/* Password Field */}
                        <div className="mb-4">

                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="mt-1 p-2 w-full border border-[#FF0000] rounded-md"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be at least 8 characters long',
                                        }
                                    })}
                                />
                                <div className="absolute right-3 top-4 cursor-pointer text-[#FF0000]"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>

                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

                        </div>

                        {/* Firebase Error */}
                        {loginError && <p className="text-red-500 text-xs mt-2">{loginError}</p>}

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white font-medium py-2 rounded-full transition-transform duration-200 transform hover:scale-105"
                        >
                            Login
                        </button>
                    </form>

                    <div className='mt-6 text-center'>
                        <p>Don’t have an account?
                            <Link to={'/register'}>
                                <span className='text-[#FF0000] hover:underline ms-2'>Register Now</span>
                            </Link>
                        </p>
                    </div>

                    <div className='mt-4 text-center '>

                        <h4 className='text-lg font-semibold italic'>Or Login With</h4>

                        <div className='flex justify-center items-center gap-3 my-4'>

                            <button className='flex justify-between items-center gap-2 px-3 py-2 border rounded-lg text-lg font-medium bg-[#8B0000] text-white hover:bg-white hover:text-[#FF0000] hover:border-[#FF0000] transition-all duration-300'>

                                <FaGoogle />
                                <h3>Google</h3>

                            </button>

                            <button className='flex justify-between items-center gap-2 px-3 py-2 border rounded-lg text-lg font-medium bg-[#8B0000] text-white hover:bg-white hover:text-[#FF0000] hover:border-[#FF0000] transition-all duration-300'>

                                <FaFacebookF />
                                <h3>Facebook</h3>

                            </button>

                            <button className='flex justify-between items-center gap-2 px-3 py-2 border rounded-lg text-lg font-medium bg-[#8B0000] text-white hover:bg-white hover:text-[#FF0000] hover:border-[#FF0000] transition-all duration-300'>

                                <FaPhoneAlt />
                                <h3>Phone</h3>

                            </button>

                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center w-full md:w-2/3 h-60 md:h-full">
                <img src="https://i.ibb.co/X2zTbv3/image2.png" className="w-full h-full" alt="logo" />
            </div>
        </div>
    );
};

export default Login;
