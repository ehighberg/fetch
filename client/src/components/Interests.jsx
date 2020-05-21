import React from 'react'

export default function Interests(props) {
    
    let user = props.user

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg mt-10'>Interests</div>
            <div className='flex flex-row justify-evenly w-11/12 mx-auto mt-4 mb-6'>
                <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>interest</div>
                <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>interest</div>
                <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>interest</div>
                <div className='text-center m-auto bg-gray-300 w-16 h-16 rounded-full'>interest</div>
            </div>

            <div id='border' className='w-1/2 m-auto h-px bg-gray-500'></div>
            
        </div>
    )
}
