import React, { useEffect, useState } from 'react'

const ShowComment = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getComments()
    }, [])
    const getComments = async () => {
        const response = await fetch(`${process.env.REACT_APP_URL}/comments`)
        const res = await response.json()
        setData(res)
    }

    return (
        <>
            {data.map((value) => {
                return (
                    <p>
                        {value.id} | {value.comment}
                    </p>
                )
            })}
        </>
    )
}

export default ShowComment
