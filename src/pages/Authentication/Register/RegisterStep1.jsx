
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AuthContext from '../../../providers/AuthContext/AuthContext';

const RegisterStep1 = () => {

    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    const onSubmit = async (data) => {
        setLoading(true);

        // Update role if 'Both' is selected
        const roles = data.role === 'Both' ? ['Blood Donor', 'Blood Recipient'] : [data.role];
        const finalData = { ...data, role: roles };

        try {
            const userCredential = await createUser(data.email, data.password);
            const user = userCredential.user;

            localStorage.setItem('userData', JSON.stringify(finalData));
            console.log(finalData);

            Swal.fire({
                title: 'Registration Successful!',
                text: 'Proceed to the next step to complete your profile.',
                icon: 'success',
                confirmButtonText: 'Continue'
            })
                .then(() => {
                    setLoading(false);
                    navigate('/register/step2'); // Smoothly navigate to RegisterStep2
                });

        } catch (error) {
            setLoading(false);
            Swal.fire({
                title: 'Registration Failed',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (

        <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-start min-h-screen md:my-10'>

            <div className='w-full h-full md:w-1/2 p-6 md:p-0'>

                <div className="w-full md:w-2/3 mx-auto px-6 py-8 bg-white border border-[#FF0000] shadow-md rounded-lg">

                    <h2 className='text-3xl md:text-5xl font-semibold mb-4 pb-4 text-center ms-6 md:ms-6 lg:ms-0 bg-gradient-to-r from-[#FF0000] to-[#8B0000] bg-clip-text text-transparent'>Register Now</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 p-2 w-full border border-[#FF0000] rounded-md"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 w-full border border-[#FF0000] rounded-md"
                                {...register('email', { required: 'Email is required', pattern: /^[^@]+@[^@]+\.[^@]+$/ })}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="mt-1 p-2 w-full border border-[#FF0000] rounded-md"
                                    {...register('password', {
                                        required: 'Password is required',
                                        pattern: {
                                            value: passwordRegex,
                                            message: 'Password must contain at least 8 characters, one letter, and one number',
                                        },
                                    })}
                                />
                                <div className="absolute right-3 top-4 cursor-pointer text-[#FF0000]"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block font-medium text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    className="mt-1 p-2 w-full border border-[#FF0000] rounded-md"
                                    {...register('confirmPassword', {
                                        required: 'Confirm Password is required',
                                        validate: (value) => value === watch('password') || 'Passwords do not match',
                                    })}
                                />
                                <div className="absolute right-3 top-4 cursor-pointer text-[#FF0000]"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                        </div>

                        {/* Role Selection */}
                        <div className="mb-6 ">
                            <label className="block text-lg font-medium">Select Your Role:
                                (<span className='text-xs md:text-sm'>You can select any One or Both</span>)
                            </label>
                            <div className="flex items-center justify-between space-x-2 md:space-x-4 mt-4 text-lg font-medium">
                                <div className='flex items-center'>
                                    <input type="radio"
                                        id="bloodDonor"
                                        className="mr-1"
                                        value="Blood Donor"
                                        {...register('role', { required: 'Please select a role' })} />
                                    <label htmlFor="bloodDonor" className="text-base">Blood Donor</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio"
                                        id="bloodRecipient"
                                        value="Blood Recipient"
                                        className="mr-1"
                                        {...register('role')} />
                                    <label htmlFor="bloodRecipient" className="text-base">Blood Recipient</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio"
                                        id="both"
                                        value="Both"
                                        className="mr-1"
                                        {...register('role')} />
                                    <label htmlFor="both" className="text-base">Both</label>
                                </div>
                            </div>
                            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white font-medium py-2 rounded-full transition-transform duration-200 transform hover:scale-105"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>

            <div className='w-full h-60 md:h-full md:w-1/2 mx-auto'>
                <img src="https://i.ibb.co.com/gw0QtmL/image1.png"
                    className='h-full w-full' alt="logo" />
            </div>

        </div>
    );
};

export default RegisterStep1;
