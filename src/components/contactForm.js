// TODO : CREATE SENDMESSAGE FUNCTION THAT WOULD ACTUALLY SEND EMAIL
// TODO: INACTIVATE SUBMIT BUTTON IF ERROR IS NOT EMPTY

import { useState } from "react";
import axios from 'axios';

export const ContactForm = () => {
    const [status, setStatus] = useState("Send Message");
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        if (name.length<4 || /\d/.test(name)){
            setError("Please provide a valid name");
         }else{
            let details = {
                name: name,
                email: email,
                message: message
              };
            let header = {
                "Content-Type": "application/json;charset=utf-8",
              }
            try {
                const response = await axios.post(`/contact`, details,{headers: header});
                setStatus("Submit");
                let result = await response.data;
                alert(result.status);
            } catch(e){
                setError(e.message)
            }
        }
      };

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
            <button type='submit' className="submit-button">{status}</button>
        </form>
    );
}