import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '../components/index.js'
import { useForm } from 'react-hook-form'

function Register() {
    const [error, setError] = useState("")
    const [file, setFile] = useState("")
    const fileInputRef = useRef(null);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const selectedFile = watch('image');
    
    const password = watch('password')

    useEffect(()=>{
        if(selectedFile && selectedFile[0]){
            setFile(URL.createObjectURL(selectedFile[0]))
        }
        else{
            setFile(null)
        }
    }, [selectedFile])
    const handleCancel = () => {
        setFile(null); 
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; 
        }
    };

    const create = (data) => {
        console.log(data)
    }
    return (
        <div className="flex items-center justify-center  p-4">
            <div className="mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10 backdrop-blur-xl bg-white/30 shadow-xl shadow-blue-500/50">
                <h2 className="text-center text-2xl font-bold leading-tight mb-4">Register to create account</h2>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            required={true}
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: "Full name is required !",
                            })}
                            aria-invalid={errors.name ? "true" : "false"}

                        />
                        {errors.name && (
                            <p role="alert" style={{ color: "red", fontSize: "12px" }}> {errors.name.message}</p>
                        )}
                        <Input
                            label="Mobile Number: "
                            required={true}
                            placeholder="Enter your mobile number"
                            {...register("phoneNumber", {
                                required: "Mobile number is required 1",
                                maxLength: {
                                    value: 10,
                                    message: "Mobile number cannot exceed 10 digits !",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Mobile number cannot be less then 10 digits !",
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Only numeric values are allowed !",
                                },
                            })}
                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                        />
                        {errors.phoneNumber && (
                            <p role="alert" style={{ color: "red", fontSize: "12px" }}> {errors.phoneNumber.message}</p>
                        )}
                        <Input
                            label="Capture a Photo: "
                            required={true}
                            placeholder="Capture a Photo"
                            type="file"
                            ref={fileInputRef}
                            accept="image/*"
                            {...register("image", {
                                required: true,
                            })}
                        />
                        {file && (
                            <div className='flex justify-center flex-col w-48 '>
                                <div className='flex justify-between'>
                                    <h3>Preview:</h3>
                                    <Button type='button' className={` bg-red-600  font-bold`} onClick={handleCancel} >X</Button>
                                </div>
                                <img
                                    src={file}
                                    alt="preview"
                                    style={{ maxWidth: '150px', maxHeight: '150px' }}
                                />
                            </div>
                        )}

                        <label htmlFor="role" className='inline-block pl-1'>Select Role:</label>
                        <select
                            id="role"{...register("role", { required: "Role is required" })}
                            className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                        >
                            <option value="admin"  >Admin</option>
                            <option value="employee" >Employee</option>
                        </select>
                        <Input
                            label="Email: "
                            required={true}
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: "Email is required !",
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address !"
                                }
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                            <p role="alert" style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>
                        )}
                        <Input
                            label="Password: "
                            type="password"
                            required={true}
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required !",
                                maxLength: {
                                    value: 16,
                                    message: "Password cannot exceed 16 digits !",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password cannot be less then 6 digits !",
                                },

                            })}
                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                        />
                        {errors.password && (
                            <p role="alert" style={{ color: "red", fontSize: "12px" }}> {errors.password.message}</p>
                        )}
                        <Input
                            label="Confirm Password: "
                            type="password"
                            required={true}
                            placeholder="Confirm your password"
                            {...register("ConfirmPassword", {
                                required: "Confirm password is required !",
                                validate: (value) => value === password || "Passwords does not match !",
                                maxLength: {
                                    value: 16,
                                    message: "Confirm Password cannot exceed 16 digits !",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Confirm Password cannot be less then 6 digits !",
                                },

                            })}
                            aria-invalid={errors.ConfirmPassword ? "true" : "false"}
                        />
                        {errors.ConfirmPassword && (
                            <p role="alert" style={{ color: "red", fontSize: "12px" }}> {errors.ConfirmPassword.message}</p>
                        )}

                        <Button type="submit" className={`w-full h-10`}>
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register