import React, { useRef, FormEvent, useState } from 'react';
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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
        // Adicione a lógica para o download do CV aqui
        // Por exemplo, redirecionar para um link de download ou realizar uma ação de download
      };

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const from_name = formData.get('from_name') as string;
        const message = formData.get('message') as string;

        emailjs
            .sendForm('service_fqy110g', 'template_cablvxf', formRef.current, {
                publicKey: 'xTZ1oDxi9tNvfX-oj',
                from_name: from_name,
                message: message
            })
            .then(
                () => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                },
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
                        Download CV
                    </motion.button>
                </motion.div>
            </motion.div>
            <motion.div className='formContainer'>
                <motion.form ref={formRef} onSubmit={sendEmail}>
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