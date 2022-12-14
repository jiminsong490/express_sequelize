import React, { useEffect, useState } from 'react'

const ShowUser = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_URL}/users`)
        const res = await response.json()
        setData(res)
    }

    return (
        <>
            {data.map((value) => {
                return (
                    <p>
                        {value.id} | {value.name} | {value.age} |{' '}
                        {value.married}
                    </p>
                )
            })}
        </>
    )
}

export default ShowUser
