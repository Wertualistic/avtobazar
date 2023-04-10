import React from 'react'
import '../signup/SignUp.css'

function SignIn() {
    return (
        <div className='sign'>
            <div className="sign__form">
                <h2 className="sign__title">KIRISH</h2>
                <form action="">
                    <input type="text" placeholder='Ismingiz...' required />
                    <input type="password" placeholder='Parol' required />
                    <button type='submit' className="sign__btn">KIRISH</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn