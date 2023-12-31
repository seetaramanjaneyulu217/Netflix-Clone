import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleForm = () => {
        setIsSignInForm(prevValue => !prevValue)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='background-display'
                />
            </div>
            <form className='absolute w-3/12 mx-auto right-0 left-0 my-40 gap-y-6 py-10 rounded-md bg-black bg-opacity-85 flex flex-col justify-center'>
                <h1 className='text-3xl font-semibold text-white mx-12'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm && <input type='text' placeholder='Full Name' className='p-2 w-9/12 m-auto bg-[#333333] placeholder-[#8c8c8c] rounded-md' /> }
                <input type='email' placeholder='Email Address' className='p-2 w-9/12 m-auto bg-[#333333] placeholder-[#8c8c8c] rounded-md' />
                <input type='password' placeholder='Password' className='p-2 w-9/12 m-auto bg-[#333333] placeholder-[#8c8c8c] rounded-md' />
                <button className='p-4 my-4 w-9/12 m-auto rounded-md border-2 border-[#E50914] bg-[#E50914] text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='text-white w-9/12 m-auto'><span className='text-[#737373]'>{isSignInForm ? "New to Netflix?" : "Already a user?"}</span> <span onClick={toggleForm} className='cursor-pointer'>{isSignInForm ? "Sign up now" : "Sign In now"}</span></p>
            </form>
        </div>
    )
}

export default Login