// 'use client'
// import Link from 'next/link';
// import { useState } from 'react';
// import { app } from '@/app/firebase';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/app/firebase';
// import { collection,addDoc } from 'firebase/firestore';


// async function addDataToFireStore = (name,email,message) {

//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [message,setMessage] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const added = await addDataToFireStore(name,email,message);
//     if(added) {
//       setName("")
//       setEmail("")
//       setMessage("")
//       alert('Data addded to fire store!!!')
//     }
//   }

//   try{
//     const docRef = await addDoc(collection(db,"messages") {
//       name: name,
//       email: email,
//       message: message,
//     })
//     console.log("Document written by id" , docRef.id)
//     return true
//   } catch (error) {
//     console.error("Error adding document",error)
//     return false
//   }
// }

// // Initialize Firebase Auth
// const auth = getAuth(app);

// const SignUp: React.FC = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     username: '',
//   });
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//       const user = userCredential.user;
//       console.log('User signed up:', user);
//       alert('Signup successful! Welcome, ' + user.email);
//       router.push('/Order');
//     } catch (error: any) {
//       console.error('Error signing up:', error.code, error.message);
//       alert('Error: ' + error.message);
//     }
//   };

//   return (
//     <section className='bg-[var(--pink-bg)]'>
//       <div className='w-full text-center'>
//         <h1 className='text-[25px] leading-none text-[var(--font-color)] font-extrabold sm:text-5xl sm:leading-tight mb-5 pt-11'>
//           Sign Up
//         </h1>
//       </div>
      
//       <div className='w-full flex justify-center'>
//         <form onSubmit={handleSignUp} className="w-[80%] sm:w-[40%] lg:w-[30%] py-11 rounded-lg">
//           <div className="mb-7 mt-4">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full py-2 px-2 border border-gray-400 rounded-md shadow-md"
//               required
//               placeholder='Email'
//             />
//           </div>
          
//           <div className="mb-7">
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
//               required
//               placeholder='Username'
//             />
//           </div>

//           <div className="mb-7">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
//               required
//               placeholder='Password'
//             />
//           </div>

//           <div className="mb-7">
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
//               required
//               placeholder='Confirm Password'
//             />
//           </div>

//           <div className='flex justify-left lg:justify-start'>
//             <button
//               type='submit'
//               className='text-white bg-[var(--button-color)] font-medium px-4 rounded-md 
//               py-2 md:py-2 text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
//               ease-in-out w-[150px] shadow-md'>
//                 Sign Up
//             </button>
//           </div>

//           <p className='mt-12 text-center'>
//             Already have an account? <Link href="/login" className='text-[var(--font-color)] hover:underline'>Login Here</Link>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default SignUp;


'use client'
import Link from 'next/link';
import { useState } from 'react';
import { app, db } from '@/app/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc } from 'firebase/firestore';

const auth = getAuth(app);

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('Signup successful! Welcome, ' + user.email);
      router.push('/Order');
    } catch (error: any) {
      console.error('Error signing up:', error.code, error.message);
      alert('Error: ' + error.message);
    }
  };

  const handleFirestoreSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
      });
      console.log("Document written with ID:", docRef.id);
      setName('');
      setEmail('');
      setMessage('');
      alert('Data added to Firestore!');
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add data to Firestore.");
    }
  };

  return (
    <section className='bg-[var(--pink-bg)]'>
      <div className='w-full text-center'>
        <h1 className='text-[25px] leading-none text-[var(--font-color)] font-extrabold sm:text-5xl sm:leading-tight mb-5 pt-11'>
          Sign Up
        </h1>
      </div>

      <div className='w-full flex justify-center'>
        <form onSubmit={handleSignUp} className="w-[80%] sm:w-[40%] lg:w-[30%] py-11 rounded-lg">
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
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
              required
              placeholder='Username'
            />
          </div>

          <div className="mb-7">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
              required
              placeholder='Password'
            />
          </div>

          <div className="mb-7">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
              required
              placeholder='Confirm Password'
            />
          </div>

          <div className='flex justify-left lg:justify-start'>
            <button
              type='submit'
              className='text-white bg-[var(--button-color)] font-medium px-4 rounded-md 
              py-2 md:py-2 text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
              ease-in-out w-[150px] shadow-md'>
                Sign Up
            </button>
          </div>

          <p className='mt-12 text-center'>
            Already have an account? <Link href="/login" className='text-[var(--font-color)] hover:underline'>Login Here</Link>
          </p>
        </form>
      </div>

      <div className='w-full flex justify-center mt-10'>
        <form onSubmit={handleFirestoreSubmit} className="w-[80%] sm:w-[40%] lg:w-[30%] py-11 rounded-lg">
          <h2 className='text-lg mb-5'>Add Data to Firestore</h2>
          <div className="mb-7">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 px-2 border border-gray-400 rounded-md shadow-md"
              required
              placeholder='Name'
            />
          </div>
          <div className="mb-7">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-2 border border-gray-400 rounded-md shadow-md"
              required
              placeholder='Email'
            />
          </div>
          <div className="mb-7">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full py-2 px-2 border border-gray-400 rounded-md shadow-md"
              required
              placeholder='Message'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-[var(--button-color)] font-medium px-4 rounded-md 
            py-2 md:py-2 text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
            ease-in-out w-full shadow-md'>
              Submit to Firestore
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
