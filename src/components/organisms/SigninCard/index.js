import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../molecules/Logo'
import { InputField } from '../../molecules/Input'

export default function SignInCard({ handleSignInWithEmail, handleSignInWithGoogle }) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div className="flex flex-col mx-auto gap-8 my-32 w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-indigo-100 rounded-lg p-6">
            <Logo/>
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold text-center md:text-left">Welcome back to  Kasher !</h1>
                    <h2 className="text-1xl font-bold text-center md:text-left md:pl-2">
                        New here ? <Link to="/signup" className="text-blue-800">Create an account</Link>
                    </h2>
                </div>
                <div className="flex flex-col gap-4 lg:px-16">
                    <form className="flex flex-col gap-4 md:gap-6" onSubmit={(event) => handleSignInWithEmail(event, email, password)}>
                        <InputField type="email" onChange={(event) => setEmail(event.target.value)} value={email}>
                            Email
                        </InputField>
                        <InputField type="password" onChange={(event) => setPassword(event.target.value)} value={password}>
                            <div className="flex flex-row items-center">
                                Password
                                <div className="flex-1"/>
                                <Link to="/resetpassword" className="text-xs self-position-end text-blue-800 font-bold">
                                    Forget your password?
                                </Link>
                            </div>
                        </InputField>
                        <fieldset className="flex gap-4 ml-2">
                            <input type="checkbox"/>
                            <label className="font-semibold">Remember this device</label>
                        </fieldset>
                        <input 
                            type="submit" 
                            className="font-semibold p-2 rounded-lg border-gray-300 bg-green-100 hover:bg-green-400 hover:text-white cursor-pointer"
                            value="Sign in"
                        />
                        <p className="text-xs font-light text-center">or sign in with</p>
                        <button 
                            className="flex flex-row items-center justify-center bg-white p-2 rounded-lg h-10"
                            onClick={(e) => handleSignInWithGoogle(e)}    
                        >
                            <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" className="w-8" alt="google-logo"/>
                            <span className="font-semibold">Google</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}