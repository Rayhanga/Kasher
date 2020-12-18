import React from 'react'

import BackButton from '../../molecules/BackButton'
import { InputField } from '../../molecules/Input'

export default function ResetPasswordCard({ handleResetPasswordEmail }) {
    const [email, setEmail] = React.useState('')

    return (
        <div className="flex flex-col mx-auto my-32 w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-indigo-100 rounded-lg p-6">
            <BackButton/>
            <div className="flex flex-col gap-2 md:gap-4">
                <div>
                    <h1 className="text-xl font-bold text-center">Forget your password ?</h1>
                    <h2 className="text-md font-bold text-center">Reset your password here !</h2>
                </div>
                <div className="flex flex-col gap-4 lg:px-16">
                    <form className="flex flex-col gap-4 md:gap-6" onSubmit={(e) => handleResetPasswordEmail(e, email)}>
                        <InputField type="email" onChange={(e) => setEmail(e.target.value)} value={email}>
                            Email
                        </InputField>
                        <input 
                            type="submit" 
                            className="font-semibold p-2 rounded-lg border-gray-300 bg-green-100 hover:bg-green-400 hover:text-white cursor-pointer"
                            value="Send password reset email"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}