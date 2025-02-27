import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine,RightLine} from "./design/Pricing"

const Pricing = () => {
  return (
   <Section>
     <div className='overflow-hidden' id='pricing'>
      <div className='container relative z-2'>
        <div className='relative justify-center hidden mb-[6.5rem] lg:flex'>
            <img className='relative z-1' src={smallSphere} width={255} height={255} alt="Sphere" />
            <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                <img src={stars} className='w-full' width={950} height={400} alt="Stars" />
            </div>
        </div>
        <Heading tag="Get started with Brainware"
          title="Pay once, use forever"
        />
        <div className='relative'>
          <PricingList/>
          <LeftLine/>
          <RightLine/>
        </div>
        <div className='flex justify-center mt-10'>
          <a className='text-xs font-bold tracking-wider uppercase border-b font-code' href="">See full Details</a>
        </div> 
      </div>
    </div>
   </Section>
  )
}

export default Pricing
