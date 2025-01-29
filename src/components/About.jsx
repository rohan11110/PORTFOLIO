import React from 'react'
import {ABOUT_TEXT} from '../constants';
import {motion} from 'motion/react';


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About 
           <span className='text-neutral-500'> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0,x:-100}} transition={{duration: 0.5}} className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl w-120 h-90 ' src="https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" alt="about" />
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0,x:100}} transition={{duration: 0.5}}  className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default About
