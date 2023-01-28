import React, {useState} from 'react';
import "./LoginScreen.css";
import SignInScreen from './SignInScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt="" />
        <button onClick={() => setSignIn(true)}
        className='loginScreen__button'>
            Sign In
        </button>

        <div className='loginScreen__gradient'/>
        </div>

        <div className='loginScreen__body'>
            {signIn ? (
                <SignInScreen />
            ) : (
            <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen__input'>
                <form>
                    <input type='email'
                    placeholder='Email Address'

                    />
                    <button onClick={() => setSignIn(true)}
                    className='loginScreen__getStarted'>Get Started
                        <span className='right-arrow'>
                            <svg viewBox='0 0 6 12' xmlns="http://www.w3.org/2000/svg">
                                <desc>chevron</desc>
                                <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path>
                            </svg>
                        </span>
                    </button>
                </form>
            </div>

            </>
            )}

        </div>
    </div>
  )
}

export default LoginScreen
