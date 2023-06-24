import React, { useState } from 'react';

import { Dna } from  'react-loader-spinner'
import emailjs from 'emailjs-com';
import { message } from 'antd';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const Contact = () => {
  const [formInfo, setFormInfo] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
      emailjs
        .send('service_p40345g', 'template_j1lcfkb', formInfo, '3ZQxGdSOy5oAgVmfE')
        .then((result) => {
          message.success('Mail sent successfully');
          // console.log(result);   
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          message.error('Email sending failed:');
        });

      setFormInfo({ name: '', email: '', message: '' });
    
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br />together!</h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            onSubmit={handleFormSubmit}
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Name ...'
              value={formInfo.name}
              onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Your Email ...'
              value={formInfo.email}
              onChange={(e) => setFormInfo({ ...formInfo, email: e.target.value })}
              required
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              type='text'
              placeholder='Your Message ...'
              value={formInfo.message}
              onChange={(e) => setFormInfo({ ...formInfo, message: e.target.value })}
              required
            ></textarea>
            {loading? (
              
              <Dna
              visible={true}
              // height="50"
              // width="50"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              />
              ):(
                <button type='submit' className='btn btn-lg'>send message</button>

            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
