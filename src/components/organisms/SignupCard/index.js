import React from 'react'

import { InputField } from '../../molecules/Input'

export default function SignUpCard({ handleSignUpWithEmail, handleSignUpWithGoogle }) {
    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confPassword, setConfPassword] = React.useState('')
    const [acceptTos, setAcceptTos] = React.useState(false)

    return (
        <div className="flex flex-col mx-auto gap-8 my-32 w-10/12 lg:w-8/12 xl:w-7/12 bg-indigo-100 rounded-lg p-6">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-4xl font-bold text-center">Sign up to  Kasher</h1>
                </div>
                <div className="flex flex-col gap-4 lg:px-16">
                    <button 
                        className="flex flex-row items-center justify-center bg-gray-100 p-2 rounded-lg h-10"
                        onClick={(event) => handleSignUpWithGoogle(event)}    
                    >
                        <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" className="w-8" alt="google-logo"/>
                        <span className="font-semibold">Sign up with google</span>
                    </button>
                    <p className="text-xs font-light text-center">or sign up with email</p>
                    <form className="flex flex-col gap-4 md:gap-6" onSubmit={(event) => handleSignUpWithEmail(event, email, password, confPassword, acceptTos)}>
                        <InputField type="email" onChange={(event) => setEmail(event.target.value)} value={email}>
                            Email
                        </InputField>
                        <InputField type="text" onChange={(event) => setUsername(event.target.value)} value={username}>
                            Username
                        </InputField>
                        <InputField type="password" onChange={(event) => setPassword(event.target.value)} value={password}>
                            Password
                        </InputField>
                        <InputField type="password" onChange={(event) => setConfPassword(event.target.value)} value={confPassword}>
                            Confirm Password
                        </InputField>
                        <fieldset className="flex gap-4 ml-2">
                            <input type="checkbox" value={acceptTos} onChange={() => {setAcceptTos(!acceptTos)}}/>
                            <label className="font-semibold">I've read and accept the terms & conditions</label>
                        </fieldset>
                        <input 
                            type="submit" 
                            className="font-semibold p-2 rounded-lg border-gray-300 bg-green-100 hover:bg-green-400 hover:text-white cursor-pointer"
                            value="Sign in"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}