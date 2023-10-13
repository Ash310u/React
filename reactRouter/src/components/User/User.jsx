import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams()

    return (
        <>
            <div className='text-center text-3xl m-4 p-4 bg-gray-600 text-white'>
                User: {userId}
            </div>
        </>
    )
}