import React from 'react'

export default function Pics(props) {
    return (
        <div>
            <div className='text-purple-700 text-2xl text-left p-10'>Pics</div>
            <img src={require('../assets/pic1.jpg')} alt='personal' />
            <img src={require('../assets/pic2.jpg')} alt='personal' />
            <img src={require('../assets/pic3.jpg')} alt='personal' />
        </div>
    )
}
