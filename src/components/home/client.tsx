import React from 'react'
import Wrapper from '../wrapper'
import Image from 'next/image'

const Client = () => {
  return (
    <Wrapper className='flex justify-center mt-[150px]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-y-[24px]">
        {/* Example logos */}
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/client/01.svg"
            alt="Client 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/client/02.svg"
            alt="Client 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/client/03.svg"
            alt="Client 3"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/client/04.svg"
            alt="Client 4"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/client/05.svg"
            alt="Client 5"
            fill
            className="object-contain"
          />
        </div>
        {/* Add more logos as needed */}
      </div>
    </Wrapper>
  )
}

export default Client
