"use client"
import React, { useState } from 'react';
import Authform from '@/app/components/Authform';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <Authform
                formType={isLogin ? 'Login' : 'Signup'}
                buttonText={isLogin ? 'Signup' : 'Login'}
                buttonAction={toggleForm}
            />
        </div>
    );
}
