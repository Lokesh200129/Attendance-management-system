import React, { useState } from 'react'
// import {Link, useNavigate} from 'react-router-dom'

import { Button, Input } from "../components/index.js"
import { useForm } from "react-hook-form"

function AttendenceForm() {

    // Fetch name and phone number to display inside the form
    // set date and time while submitting the form data 

    const [name, setName] = useState('Lokesh')
    const [phone, setPhone] = useState('1234567890')
    const { register, handleSubmit, watch } = useForm()
    const [error, setError] = useState("")

    const file = watch('image')

    const attendence = (data) => {
        console.log(data)
    }


    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

                <h2 className="text-center text-2xl font-bold leading-tight">Attendence Form</h2>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(attendence)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Name:"
                            type="text"
                            value={name}
                            disabled
                        
                        />
                        <Input
                            label="Phone Number:"
                            type="number"
                            value={phone}
                            disabled
                           
                        />
                        <Input
                            label="Capture a Photo:"
                            placeholder="Capture a Photo"
                            type="file"
                            accept="image/*"
                            capture="user"
                            {...register("image", {
                                required: true,
                            })}
                        />
                        {file && (
                            <div>
                                <h3>Preview:</h3>
                                    <img
                                        src={URL.createObjectURL(file[0])}
                                        alt="preview"
                                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                                    />
                            </div>
                        )}
                        {/* <Input
                            label="Date:"
                            type="text"
                            {...register("date", {
                                required: true,
                            })}
                            /> */}
                        <Button type="submit" className="w-full">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AttendenceForm