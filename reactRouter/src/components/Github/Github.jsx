import React, { useEffect, useState } from "react";

export default function Github() {
    const [ data, setData ] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/ash310u')
            .then(res => res.json())
            .then(data => setData(data))
    })
    return (
        <>
            <div className='text-center text-3xl m-4 p-4 bg-gray-600 text-white'>
                Github followers: {data.followers}
            </div>
            <div className="flex justify-center flex-row p-4">
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=ash310u" alt="" className="m-4" />
                <img src="https://github-readme-stats-anuraghazra1.vercel.app/api/top-langs/?username=ash310u" alt="" className="m-4" />
                <img src="https://github-readme-stats.vercel.app/api?username=ash310u" alt="" className="m-4" />
            </div>
        </>
    )
}