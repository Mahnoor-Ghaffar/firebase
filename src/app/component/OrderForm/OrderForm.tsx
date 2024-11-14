'use client'
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    deliveryOption: '',
    address1: '',
    address2: '',
    city: '',
    zipCode: '',
    orderDetails: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to handle form submission
  };

  return (
<section className='bg-[var(--pink-bg)]'>
 <div className='w-full text-center'>
   <h1 className='text-[25px] leading-none text-[var(--font-color)]
   font-extrabold sm:text-5xl sm:leading-tight mb-5 pt-11'>
      Special Order Form
    </h1>
    <p className='text-[12px] md:text-[20px] px-5'>
    Please fill out the form and someone from our team will get back to you within 24 hours. 
    </p>
 </div>
    

    {/* Form */}
    <div className='w-full flex justify-center'>
    <form onSubmit={handleSubmit} className="w-[90%] sm:w-[70%] lg:w-[60%] py-11 rounded-lg">
      <div className="mb-7 mt-4">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full py-2 px-2 border border-gray-400 rounded-md shadow-md"
          required
          placeholder='Email'
        />
      </div>

      <div className="mb-7">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
          required
          placeholder='Phone Number'
        />
      </div>

      <div className="mb-7">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
          required
          placeholder='Name'
        />
      </div>

      <div className="mb-7">
        <select
          id="deliveryOption"
          name="deliveryOption"
          value={formData.deliveryOption}
          onChange={handleChange}
          className="w-full py-2 px-2 text-gray-500 border border-gray-400 shadow-md rounded-md"
          required
        >
          <option value="" className='text-gray-700'>Choose delivery option</option>
          <option value="standard" className='text-gray-700'>Standard Delivery</option>
          <option value="express" className='text-gray-700'>Express Delivery</option>
        </select>
      </div>

      <div className="mb-7 grid md:grid-cols-2 gap-[1rem] w-full">
      <div>
        <input
          type="text"
          id="address1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
          required
          placeholder='Address1'
        />
      </div>

      <div>
        <input
          type="text"
          id="address2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
          placeholder='Address2'
        />
      </div>
      </div>
      

      <div className="mb-7 grid md:grid-cols-2 gap-[1rem] w-full">
      <div>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
          required
          placeholder='City'
        />
      </div>

      <div>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full py-2 px-2 border border-gray-400 rounded-md"
          required
          placeholder='Zip Code'
        />
      </div>
      </div>
      

      <div className="mb-7">
        <textarea
          id="orderDetails"
          name="orderDetails"
          value={formData.orderDetails}
          onChange={handleChange}
          className="w-full py-5 px-2 border border-gray-400 rounded-md"
          rows={8}
          required
          placeholder='Order Detail'
        />
      </div>

      <div className="mb-7">

        {/* Button */}
      <div className='flex justify-left lg:justify-start'>
      <button
      type='submit'
      className='text-white bg-[var(--button-color)] font-medium px-5 rounded-full 
       py-2.5 md:py-4 text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
       ease-in-out w-[150px] shadow-md'>
         <Link href="/">Submit</Link>
     </button>
      </div>

      </div>
    </form>
    </div>

    </section>
  );
}
