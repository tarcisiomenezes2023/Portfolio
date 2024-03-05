import React, { useRef, FormEvent, useState } from 'react';
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs, { EmailJSResponseStatus} from '@emailjs/browser';



interface EmailOptions {
    publicKey: string;
    from_name: string;
    message: string;
}

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string | boolean>(false);
    const [success, setSuccess] = useState<string | boolean>(false);

    const handleDownloadCV = () => {
        const cvUrl = 'https://drive.google.com/file/d/1nq6G591W14bUvLfGxgbcnVuuYX88o3G1/view?usp=sharing'; 
        window.open(cvUrl, '_blank'); 
    };

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const from_name = formData.get('from_name') as string;
        const message = formData.get('message') as string;

        const options: EmailOptions = {
            publicKey: 'xTZ1oDxi9tNvfX-oj',
            from_name: from_name,
            message: message
        };

        emailjs
            .sendForm('service_fqy110g', 'template_cablvxf', formRef.current, options)
            .then(
                (response: EmailJSResponseStatus) => {
                    console.log('Email sent:', response.status);
                    setSuccess(true);
                },
                (error: Error) => {
                    console.error('Email error:', error);
                    setError(true);
                }
            );
    };

    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className='textContainer' variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div variants={variants} className='item'>
                    <h2>Mail</h2>
                    <span>tarcisiomenezes2019@outlook.com</span>
                </motion.div>
                <motion.div variants={variants} className='item'>
                    <h2>Phone</h2>
                    <span>+36 20 3173408</span>
                </motion.div>
                <motion.div className='links' variants={variants}>
                    <motion.button variants={variants} className='CV' onClick={handleDownloadCV}>
                        Resume
                    </motion.button>
                </motion.div>
            </motion.div>
            <motion.div variants={variants} className='formContainer'>
                <motion.form variants={variants} ref={formRef} onSubmit={sendEmail}>
                    <input type='text' name='from_name' required placeholder='Name' />
                    <input type='email' name='email' required placeholder='Email' />
                    <textarea name='message' rows={8} placeholder='Message' />
                    <button type='submit'>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </motion.div>
        </motion.div>
    );
}

export default Contact;