import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams()

    return (
        <>
            <div className='flex justify-center text-lg'>
                User: {userId}
            </div>
        </>
    )
}