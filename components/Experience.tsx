"use client";
import React from 'react'
import { useEffect, useState } from 'react'
import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'
import { motion } from 'framer-motion'

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    )
  
    const element = document.getElementById('experience')
    if (element) observer.observe(element)
  
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  return (
    <section
      className='flex items-center justify-center py-8'
      id='experience'
    >
      <div className='py-20 max-w-7xl'>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
        <h1 className='heading'>
          My <span className='text-sky'>work experience</span>
        </h1>
        </motion.div>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map(card => (
            <Button
              key={card.id}
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius='1.75rem'
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: 'rgb(4,7,29)',
                backgroundColor:
                  'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`
              }}
              // remove bg-white dark:bg-slate-900
              className='flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800'
            >
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className='lg:w-32 md:w-20 w-16'
                />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
