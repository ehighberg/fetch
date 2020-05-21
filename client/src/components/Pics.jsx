import React from 'react'

export default function Pics(props) {
    return (
        <div>
            <div className='font-bold text-purple-700 text-lg my-10'>Pics</div>
            <div className='w-4/5 h-64 mx-auto my-4 rounded-lg bg-gray-300'>
              <img src={require('../assets/Images/pic1.jpg')} alt='personal' />
              <img src={require('../assets/Images/pic2.jpg')} alt='personal' />
              <img src={require('../assets/Images/pic3.jpg')} alt='personal' />
            </div>
        </div>
    )
}
