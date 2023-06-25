'use client'

import styles from './Form.module.css'
import { useState } from 'react'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!email || !password) {
      setError('One of the required fields is empty')
    }


    
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} flex flex-col justify-around gap-4`}>
      <label className='font-bold' htmlFor="email">Email</label>
      <input
        type="text"
        placeholder='Enter your email'
        className='p-2 border-2 shadow-sm focus-visible:shadow-lg rounded'
        onChange={(e) => setEmail(e.target.value)} />
      <label className='font-bold' htmlFor="password">Password</label>
      <input
        type="password"
        placeholder='**********'
        className='p-2 border-2 shadow-sm focus-visible:shadow-lg rounded'
        onChange={(e) => setPassword(e.target.value)} />
      <div className='flex justify-between mt-4 text-sm'>
        <div className='flex gap-2'>
          <input type="checkbox" name="remember" id="remember" className='accent-black' />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a href="#" className='font-bold hover:text-gray-700'>Forgot password</a>
      </div>
      <button className='bg-black text-white py-2 mt-4 rounded hover:bg-gray-700'>Sign in</button>

      {error && 
        <div className='bg-red-300 p-2 rounded text-center font-extralight'>
          <p>{error}</p>
        </div>
      }
    </form>
  )
}

export default Form