import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  return (
    <div className='absolute px-6 py-1 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'>
      <img
        className='w-52'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='netflix-logo'
      />

      {
        user && <div onClick={handleSignOut} className='text-white font-semibold text-3xl cursor-pointer flex gap-2 items-center'>
          <img src={user?.photoURL} className='h-12 w-12 rounded-full' alt='usericon' />
          <p>LogOut</p>
        </div>
      }
    </div>
  )
}

export default Header