'use client'
import Link from 'next/link';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (

    <section className='py-5 bg-[var(--bg-color)] w-[100%] flex flex-col'>
             <div className="container flex flex-wrap mx-auto justify-center
              md:px-12 md:flex-row mb-96 md:mb-11">  


              {/* text sec */}
              <div className='mt-7 lg:mb-0 lg:w-1/2 px-5 py-10 sm:px-10'>
                    <h1 className='max-w-xl text-[25px] leading-none text-[var(--font-color)]
                    font-extrabold sm:text-5xl text-left sm:leading-tight mb-5'>
                        Let’s Get In Touch
                    </h1>
                    <p className='text-[16px] sm:text-[18px] max-w-xl text-left text-[var(--font-black)] lg-max-w-md'>
                    Lorem ipsum dolor sit amet consectetur. Faucibus nulla dui ut nulla nec viverra enim luctus ut.
                    Venenatis urna leo facilisi facilisi iaculis pellentesque at purus. 
                    <br />
                    <br />
                    Neque erat sit sed venenatis platea volutpat justo tristique. Sagittis sagittis magna tellus magna 
                    ridiculus parturient. Egestas tempor lobortis vitae amet facilisi diam nec metus imperdiet. At proin 
                    et enim fermentum. Erat blandit nibh cras consequat cras mauris. In eu turpis sed dolor sit dapibus 
                    magnis arcu dictum.
                    </p>

                </div>

{/* Form */}
<div className='lg:w-1/2 w-[335px] h-[330px] lg:h-[760px] sm:w-[580px] sm:h-[510px]'>
     <form onSubmit={handleSubmit} className="max-full mx-auto px-6 py-20 rounded-md h-full flex flex-col
     gap-[4rem]">
      <div>
        
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Your Name'
          className=" shadow-md w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Your Email'
          className="shadow-md w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Your Message'
          className="shadow-md w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={10}
        />
      </div>

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
    </form>
</div>

                
            </div>

        </section>


    
  );
};

export default ContactForm;



