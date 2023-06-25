import styles from './page.module.css'
import Image from 'next/image';

import Form from './components/Form/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'


export default function login() {

  return (
    <main className="md:flex ">
      <div className='flex flex-col justify-between items-center md:w-6/12 p-12'>
        <header className='self-start flex items-center gap-2'>
          {/* <Image></Image> */}
          <div className='w-5'>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
          <h3>Apprap</h3>
        </header>
        <div className='flex flex-col  gap-6 md:relative md:bottom-12 my-12'>
          <div className='text-center'>
            <h2 className='text-4xl mb-4'>Login</h2>
            <h4>Wellcome back 😉</h4>
          </div>
          <Form />
        </div>
        <footer>
          <p>Don't have an account? <a href="#" className='font-bold hover:text-gray-700'>Sign up</a></p>
        </footer>
      </div>
      <div className='hidden md:block bg-teal-900 w-6/12'>

      </div>
    </main>
  )
}