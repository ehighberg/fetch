import React from 'react'

export default function Interests(props) {

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg mt-10'>Interests</div>

            <div className='flex flex-row justify-evenly w-11/12 mx-auto mt-4 mb-6'>
                <div className='w-20'>
                    <img src={require('../assets/Icons/Travel.png')} alt='interest travel' />
                </div>
                <div className='w-20'>
                    <img src={require('../assets/Icons/Pets.png')} alt='interest animals' />
                </div>
                <div className='w-20'>
                    <img src={require('../assets/Icons/Soccer.png')} alt='interest sports' />
                </div>
                <div className='w-20'>
                    <img className='w-full' src={require('../assets/Icons/Email.png')} alt='interest mail' />
                </div>
            </div>

            <div id='border' className='w-1/2 m-auto h-px bg-gray-500'></div>
            
        </div>
    )
}
