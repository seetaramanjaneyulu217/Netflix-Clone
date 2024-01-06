import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateTheData } from '../utils/Validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const username = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const dispatch = useDispatch()

    const toggleForm = () => {
        setIsSignInForm(prevValue => !prevValue)
    }

    const handleButtonClick = () => {

        const params = {
            username: isSignInForm ? null : username.current.value,
            email: email.current.value,
            password: password.current.value
        }

        const message = validateTheData(params)
        setErrorMessage(message)

        if (message) return

        if (!isSignInForm) {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: username.current.value, photoURL: "https://avatars.githubusercontent.com/u/118277766?v=4"
                      }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser
                        dispatch(addUser({ uid, email, displayName, photoURL }))
                      }).catch((error) => {
                        setErrorMessage(error.message)
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }

        else {
            // SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='background-display'
                />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 mx-auto right-0 left-0 my-40 gap-y-6 py-10 rounded-md bg-black bg-opacity-85 flex flex-col justify-center'>
                <h1 className='text-3xl font-semibold text-white mx-12'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={username} type='text' placeholder='Full Name' className='p-2 w-9/12 m-auto bg-[#333333] placeholder-[#8c8c8c] rounded-md text-white' />}
                <input ref={email} type='email' placeholder='Email Address' className='p-2 w-9/12 m-auto bg-[#333333] placeholder-[#8c8c8c] rounded-md text-white' />
                <input ref={password} type='password' placeholder='Password' className='p-2 w-9/12 m-auto bg-[#333333] placeholder-[#8c8c8c] rounded-md text-white' />
                {errorMessage && <p className='text-red-500 font-semibold w-9/12 mx-auto'>{errorMessage}</p>}
                <button onClick={handleButtonClick} className='p-4 my-4 w-9/12 m-auto rounded-md border-2 border-[#E50914] bg-[#E50914] text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='text-white w-9/12 m-auto'><span className='text-[#737373]'>{isSignInForm ? "New to Netflix?" : "Already a user?"}</span> <span onClick={toggleForm} className='cursor-pointer'>{isSignInForm ? "Sign up now" : "Sign In now"}</span></p>
            </form>
        </div>
    )
}

export default Login