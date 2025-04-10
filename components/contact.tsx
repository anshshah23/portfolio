'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Github, Globe, Send } from 'lucide-react'
import dynamic from "next/dynamic";
import { GlassCard } from '@/components/ui/glass-card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button), { ssr: false });

type ContactInfo = {
  title: string
  url: string
  display: string
  icon: React.ElementType
}

export function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contacts: ContactInfo[] = [
    {
      title: 'Phone',
      url: 'tel:+918928797765',
      display: '+91 8928797765',
      icon: Phone
    },
    {
      title: 'Email',
      url: 'mailto:anshshah2303@gmail.com',
      display: 'anshshah2303@gmail.com',
      icon: Mail
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anshshah23/',
      display: 'linkedin.com/in/anshshah23',
      icon: Linkedin
    },
    {
      title: 'GitHub',
      url: 'https://github.com/anshshah23/',
      display: 'github.com/anshshah23',
      icon: Github
    },
    {
      title: 'Portfolio',
      url: 'https://anshshah.vercel.app/',
      display: 'anshshah.vercel.app',
      icon: Globe
    }
  ]

  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <h2 className='mb-4 text-4xl font-bold tracking-tight text-white'>
            <span className='bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>
              Contact Me
            </span>
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-300'>
            Get in touch for opportunities or just to say hello
          </p>
        </motion.div>

        <div className='mt-12 grid gap-8 lg:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-6'
          >
            <h3 className='text-xl font-semibold text-white'>Get In Touch</h3>
            <p className='text-gray-400'>
              Feel free to reach out to me for any questions, opportunities, or
              just to say hello. I'll get back to you as soon as possible.
            </p>
            <div className='space-y-4'>
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-indigo-900/20'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + 0.1 * index }}
                  whilehover={{ scale: 1.02, x: 5 }}
                >
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 text-indigo-500'>
                    <contact.icon className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium text-gray-300'>
                      {contact.title}
                    </h4>
                    <p className='text-gray-400'>{contact.display}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <GlassCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='p-8'
          >
            <h3 className='mb-6 text-xl font-semibold text-white'>
              Send Me a Message
            </h3>
            {isSubmitted ? (
              <motion.div
                className='rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-600/20 p-4 text-indigo-300'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p>Thank you for your message! I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm text-gray-300'
                  >
                    Name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    required
                    className='border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-indigo-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm text-gray-300'
                  >
                    Email
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your email'
                    required
                    className='border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-indigo-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='mb-2 block text-sm text-gray-300'
                  >
                    Message
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Your message'
                    required
                    className='min-h-32 border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-indigo-500'
                  />
                </div>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                  whilehover={{ scale: 1.02 }}
                  whiletap={{ scale: 0.98 }}
                  as={motion.button}
                >
                  {isSubmitting ? (
                    <span className='flex items-center gap-2'>
                      <svg
                        className='h-4 w-4 animate-spin'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className='flex items-center gap-2'>
                      <Send className='h-4 w-4' />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
