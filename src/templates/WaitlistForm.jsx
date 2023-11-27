import React, { useState } from 'react';
import "@styles/templates/waitlistForm.css"

import { isValidEmail, isValidName } from '@utils/validateData';
import { showToast } from '@components/Toast';
import { showError, hideError } from '@utils/showError';

const WaitlistForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isValidName(name) && isValidEmail(email)) {
            hideError();

            const data = {
                name: name.toLowerCase(),
                email: email.toLowerCase()
            };
    
            const options = {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(data)
            }
    
            const API = process.env.API_WAITLIST;
    
            try {
                const response = await fetch(API, options);
    
                if (response.status !== 200) {
                    showToast(response.status ,"registro no exitoso");
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    showToast(response.status ,"registro exitoso");
                }
    
                const data = await response.json();
                console.log(data);
    
                setName('');
                setEmail('');
            } catch (error) {
                console.error(error);
            }
        } else {
            setName('');
            setEmail('');

            // Show error
            showError();
        }
    };

    return (
        <div className='form-container'>
            <h2 className='form--title'>¡Falta poco para empezar!</h2>

            <form onSubmit={handleSubmit} className='form'>
                <label className='name__input'>
                    <input type="text" value={name} placeholder='Nombre' onChange={e => setName(e.target.value)} required />
                </label>
                <label className='email__input'>
                    <input type="email" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} required />
                </label>
                
                <span className='error-format hidden'>Revisa el formato de nombre o email</span>

                <input type="submit" className='submit-button' value="Registrarme a la lista de espera" />
            </form>
        </div>
    );
};

export default WaitlistForm;
