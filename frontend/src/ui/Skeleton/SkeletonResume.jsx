import React from 'react'

export default function SkeletonResume () {
    return (
        <div className='skeleton__wrapper'>
            <div className='skeleton skeleton__border'>
                <div className='skeleton__flex'>
                    <div className='skeleton__item skeleton__img'></div>
                    <div className='skeleton__flex-1'>
                        <div className='skeleton__item skeleton__title'></div>
                        <div className='skeleton__item skeleton__exp'></div>
                        <div className='skeleton__item skeleton__little'></div>
                        <div className='skeleton__item skeleton__slot'></div>
                        <div className='skeleton__item skeleton__bigger'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
