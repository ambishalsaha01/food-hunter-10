import React from 'react';
import google from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'> Sign In with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;