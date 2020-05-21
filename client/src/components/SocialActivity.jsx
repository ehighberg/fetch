import React from 'react'

export default function SocialActivity(props) {
    return (
        <div>
            <div className='text-purple-700 text-2xl p-10'>Recent Social Activity</div>
            <div className=''>
              <img src={require('../assets/social1.png')} alt='social media post' />
              <img src={require('../assets/social2.png')} alt='social media post' />
            </div>
        </div>
    )
}
