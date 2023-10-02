// TODO : CREATE SENDMESSAGE FUNCTION THAT WOULD ACTUALLY SEND EMAIL
// TODO: INACTIVATE SUBMIT BUTTON IF ERROR IS NOT EMPTY

import { useState } from "react";

export const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = event  => {
        event.preventDefault();
        if (name.length<4 || /\d/.test(name)){
            setError("Please provide a valid name");
        }else{
            try {
                // send email
                setError("Thank you for getting in touch. Your message is send.")
            } catch(e){
                setError(e.message);
            }
        }

    }

    return(
        <form className='getInTouch-form' onSubmit={handleSubmit}>
            {error && <div className="getInTouch-error">{error}</div>}
            <input 
                className='getInTouch-input-field'
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required/>
            <input 
                className='getInTouch-input-field'
                type='email'
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required/>
            <label className="getInTouch-message-container">
                <div className="getInTouch-message-label">Message:</div>
                <textarea 
                className='getInTouch-message-field'
                value={message}
                onChange={e=>setMessage(e.target.value)}   
                row="4" 
                column="50"
                required/>
            </label>
            <button type='submit' className="submit-button">Send Message</button>
        </form>
    );
}