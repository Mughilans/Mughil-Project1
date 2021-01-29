import React from 'react'
import './SignInUp.scss'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/Signup/SignUp'

const SignInUp = () => (
    <div className='sign-in-up'>
        <SignIn />
        <SignUp />
    </div>
)
export default SignInUp;