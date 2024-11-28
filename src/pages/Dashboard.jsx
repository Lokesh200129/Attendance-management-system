import React from 'react'
import { useState } from 'react'
import { Input, Button } from '../components/index.js'
import { useForm } from 'react-hook-form'
import setting_icon from '../assets/setting_icon.svg'
import { Table } from '../components/index.js'
import edit_icon from '../assets/edit_icon.svg'
import delete_icon from '../assets/delete_icon.svg'

function Dashboard() {
  const { register, handleSubmit } = useForm()
  const [toggle, setToggle] = useState(false)
  const date = new Date

  const button1 = <Button className='bg-transparent'><img className='h-6 m-2 ' src={edit_icon} alt="" /></Button>
  const button2 = <Button className='bg-transparent'><img className='h-6  sm:m-2' src={delete_icon} alt="" /></Button>

  return (
    <div className='bg-transparent m-0 p-0'>
      <header className='bg-white/80   h-16 flex w-full sm:w-4/5  top-0 fixed'>
        <div className='mx-8 flex items-center justify-between w-full'>
          <h2 className='text-xl font-medium '>Welcome <span className='text-purple-600'>Lokesh</span></h2>
          <button onClick={()=> setToggle((prev) => !prev)}><img className=' h-8' src={setting_icon} alt="" /></button>
        </div>

      </header>
      {
        toggle && <div className='border border-gray-400 rounded bg-transparent absolute top-16 right-40 p-2'>
                    <ul className='flex flex-col p-2'>
                      <li>Profile</li>
                      <hr />

                      <li className='text-red-500'>Logout</li>

                    </ul>
                  </div>
      }
      <section className='h-2/5 w-full sm:w-4/5 m-auto mt-16'>
        <div className=' flex items-center justify-between mx-4 py-2  '>
          <h2 className=' flex justify-center text-xl font-medium '>Present Employee </h2>
          <p className=''>Date: {date.toDateString()}</p>
        </div>
        <div className='w-4/5 sm:w-full m-auto  overflow-auto'>
          <Table
            head={["Id", "Photo", "Name", "Number", "Time"]}
            body={[[1, "pic1", "Lokesh", "1234567890", "10:00 AM"], [1, "pic1", "Lokesh", "1234567890", "10:00 AM"]]}
          />
        </div>
      </section>
      <section className='h-2/5 w-full sm:w-4/5 m-auto mt-4 flex flex-col  '>
        <h2 className='bg-white/80  flex justify-center h-10 text-xl font-medium items-center '>All Employee </h2>
        <Button className='h-8	 w-4/5 m-auto mt-4  sm:w-1/4 sm:ml-1 bg-purple-500 hover:bg-purple-600 text-white  border border-purple-700 '>Add Employee</Button>
        <div className='w-4/5 sm:w-full m-auto  overflow-auto'>
          <Table
            head={["Id", "Photo", "Name", "Number", "Address", "Edit/Delete"]}
            body={[[1, "pic2", "Lokesh", "1234567890", "noida, India"], [2, "pic2", "abcd", "265378678", "noida, India"]]}
            editButton={button1}
            deleteButton={button2}
          />
        </div>
      </section>
      <section className='m-6 sm:w-4/5 sm:m-auto'>
        <h2 className='flex justify-center text-xl font-medium p-2 bg-white/80 '>Download Report</h2>
        <form action="">
          <div className='flex flex-col gap-6 sm:items-end sm:flex-row sm:gap-8  '>
            <Input
              label="From: "
              placeholder=""
              type="date"
              {...register("date", {
                required: true,
              })}

            />
            <Input
              label="To:"
              type="date"
              {...register("date", {
                required: true,
              })}

            />
            <Button className='border  h-10 p-2 bg-purple-500 hover:bg-purple-600 text-white  border border-purple-700'>Download</Button>

          </div>

        </form>
      </section>
      <section className='mb-4 w-full sm:w-4/5 m-auto mt-4 flex flex-col'>

        <h2 className='bg-white/80  flex justify-center h-10 text-xl font-medium items-center '>Salary </h2>
        <div className='w-4/5 sm:w-full m-auto  overflow-auto'>
          <Table head={["Photo", "Name", "Number", "Base Salary", "Total Salary"]} body={[["pic1", "Lokesh", "1234567890", "10000", "10000"], ["pic1", "Lokesh", "1234567890", "10000", "10000"]]} />
        </div>
      </section>
    </div>
  )
}

export default Dashboard