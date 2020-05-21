import React from 'react'

export default function Interests(props) {
    
    let user = props.user

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg mt-10'>Interests</div>
            <div className='mx-12 p-4'>
                interests...
            </div>

            <div id='border' className='w-1/2 m-auto h-px bg-gray-500'></div>
            
        </div>
    )
}
