import React from 'react'

export default function Interests(props) {

    return (
        <div>
            <div className='font-bold text-purple-700 text-lg mt-10'>Interests</div>
            <div className='flex border-b-2 mx-12 p-4'>
              <div>
                <img src={require('../assets/Icons/Travel.png')} alt='interest travel' />
              </div>
              <div>
                <img src={require('../assets/Icons/Pets.png')} alt='interest animals' />
              </div>
              <div>
                <img src={require('../assets/Icons/Soccer.png')} alt='interest sports' />
              </div>
              <div>
                <img src={require('../assets/Icons/Email.png')} alt='interest mail' />
              </div>
            </div>
        </div>
    )
}
