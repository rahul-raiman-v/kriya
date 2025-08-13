import { Mail, Phone } from 'lucide-react'
import React from 'react'

export const TeamsCard = ({variant, name="Rajkumar", designation="Event Organizer",phone="+91 1234567890",email="rajkumar@bitsathy.ac.in", image="/inauguration.jpg"}) => {
    if(variant?.trim() === "chairman"){
        return (
          <div className='shadow-xl max-w-[317.45px] rounded-lg px-6 py-7 border w-fit flex flex-col gap-y-2.5 h-fit bg-white '>
            <div className='flex items-center flex-col'>
                <img src={image} alt="" className='size-30 rounded-full shadow-2xl' loading='lazy' />
                <div className='flex flex-col gap-y-1 mt-1.5'>
                    <p className='leading-tight text-2xl text-center'>{name}</p>
                    <p className='leading-tight text-md text-center'>{designation}</p>
                </div>
            </div>
            {(phone.trim() || email.trim()) && (
                <hr className='border-gray-400' />
            )}
            <div className='flex flex-col gap-y-1'>
            {phone.trim() && (
                <div className='flex items-center gap-x-4'>
                    <Phone className='size-6 text-gray-600'/>
                    <p className='text-gray-600 text-lg'>{phone}</p>
                </div>

            )}
            {email.trim() && (
                <div className='flex items-center gap-x-4'>
                    <Mail className='size-6 text-gray-600'/>
                    <p className='text-gray-600 text-lg'>{email}</p>
                </div>
            )}
            </div>
        </div>
        )
    }
    return (
        <div className='shadow-xl rounded-lg px-6 py-5 border w-fit flex flex-col gap-y-2.5 h-fit bg-white max-w-[317.45px]'>
            <div className='flex items-center flex-col'>
                <img src={image} alt="" className='size-30 rounded-full shadow-2xl' loading='lazy' />
                <div className='flex flex-col gap-y-1 mt-1.5'>
                    <p className='leading-tight text-2xl text-center'>{name}</p>
                    <p className='leading-tight text-md text-center'>{designation}</p>
                </div>
            </div>
            {phone.trim() && email.trim() && (
                <hr className='border-gray-400' />
            )}
            <div className='flex flex-col gap-y-1'>
            {phone.trim() && (
                <div className='flex items-center gap-x-4'>
                    <Phone className='size-6 text-gray-600'/>
                    <p className='text-gray-600 text-lg'>{phone}</p>
                </div>

            )}
            {email.trim() && (
                <div className='flex items-center gap-x-4'>
                    <Mail className='size-6 text-gray-600'/>
                    <p className='text-gray-600 text-lg text-ellipsis overflow-hidden'>{email}</p>
                </div>
            )}
            </div>
        </div>
    )
}

