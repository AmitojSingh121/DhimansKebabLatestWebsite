import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
function ReservationForm() {
    const [formData , setFormData] = useState(
        {
            name :"",
            email: "",
            phone:"",
            date:"",
            time:"",
            guests:"1",
        }
    );

    const [state, handleSubmit] = useForm("xojndkdn");

  if (state.succeeded) {
    return  <p className="text-green-600 font-bold">Thanks for joining!</p>;
  }

    const handleChange = (e) =>{
        setFormData({...formData , [e.target.name]:e.target.value})
    }
    const timeSlot = ()=> {
        const slots = [];
        for(let hour = 9 ; hour < 21 ; hour++){
            const startHour = hour % 12 === 0 ? 12 : hour % 12;
            const startPeriod = hour < 12 ? "AM" : "PM"
            const EndHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1)
            const EndPeriod = hour + 1 < 12 ? "AM" : "PM"

            slots.push(`${startHour}:00 ${startPeriod} - ${EndHour}:00 ${EndPeriod}`)
        }
        return slots
    }
  return (
    <div className='min-h-screen bg p-6 md:p-12'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-3 '>
            <form className ='md:col-span-2 bg2 p-8 shadow-md'action="" onSubmit={handleSubmit}>
                <h2 className='text-xl font-semibold text-amber-500 uppercase tracking-wider'>Online Reservation</h2>
                <h1 className='text-3xl font-bold mb-4 '>Dine With Us - <span className='text-amber-500'>Reserve Now</span></h1>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='grid gap-1.5'>
                        <label htmlFor="name" className='font-bold'>Full Name</label>
                        <input type="text" id='name' name = 'name' value={formData.name} onChange={handleChange} placeholder='Full Name' required className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300'/>
                         <ValidationError 
                     prefix="name" 
                    field="name"
                    errors={state.errors}/>
                    </div>

                    <div className='grid gap-1.5'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Email of Customer'  className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300' required/>
                         <ValidationError 
                         prefix="Email" 
                        field="email"
                        errors={state.errors}
      />
                    </div>

                    <div className='grid gap-1.5'>
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" name="phonenumber" value={formData.phonenumber}  min="3000000000" max="9999999999" onchange={handleChange} placeholder='Phone Number Customer' className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300' required/>
                       <ValidationError 
                         prefix="PhoneNumber" 
                        field="phonenumber"
                        errors={state.errors}/>
                    </div>

                    <div className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Reservation Date</label>
                        <input type="date" name = "dateofbirth" value={formData.dateofbirth} onchange={handleChange} className='w-full p-3 mb-3 border bg focus:ring focus:ring-gray-300' required/>
                        <ValidationError 
                         prefix="DateOfBirth" 
                        field="dateofbirth"
                        errors={state.errors}/>
                    </div>

                    <div className='grid gap-1.5 '>
                        <label htmlFor="" className='font-bold'>Time of Reservation</label>
                        <select  name = "timeofreservation" value ={formData.timeofreservation} onchange={handleChange} className='w-full p-3 mb-3 border bg  focus:ring focus:ring-gray-300'>
                            <ValidationError 
                         prefix="TimeOfReservation" 
                        field="timeofreservation"
                        errors={state.errors}/>
                            <option value="">Select Time </option>
                            {
                                timeSlot().map((slot , index) =>(
                                    <option key={index} value={slot}>{slot}</option>
                                ) )
                            }
                        </select>
                    </div>

                     <div className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Number of Guests</label>
                        
                        <select name="guestsdhiman" value = {formData.guestsdhiman} onchange={handleChange} id="" className='w-full p-3 mb-3 border'>
                            <ValidationError 
                          prefix="GuestsDhiman" 
                          field="guestsdhiman"
                          errors={state.errors}/>
                            {[...Array(10).keys()].map((i)=>(
                                <option key={i + 1} value = {i + 1}>{i + 1} Guest(s)</option>
                            ))}
                        </select>
                    </div>
                </div>
                            
            {/* Sumbit Button */}
            <button type="submit" className='w-full mt-4 bg-amber-500 text-white hover:bg-amber-600 transition font-bold'>Book a Table</button>
            </form>

            <div className='bg3 text-black p-8 shadow-md space-y-10 text-center'>
                <div>
                    <h3 className='text-3xl font-bold'>Address</h3>
                    <p>Rua do in Rosmaninho Lote esq, 2135-083 Samora Correia, Portugal</p> 
                </div>

                <div>
                    <p>Call Us</p>
                    <h3 className='text-3xl font-bold '>+351 920 097 401</h3>
                
                <div>
                     <h3 className='text-3xl font-bold'>Open Time</h3>
                     <p>Mon - Fri : 11:00 AM - 10:00 PM </p>
                     <p>Sat - Sun : 09:00AM - 11:00 PM</p>
                </div>
                    <div>
                        <h3 className='text-lg font-bold mb-2'>Stay Connected</h3>
                        <FaFacebook className='text-4xl text-white'></FaFacebook>
                        <FaInstagramSquare className='text-4xl text-white'/>
                    </div>
                </div>            

            </div>
        </div>
    </div>
  )
}

export default ReservationForm
