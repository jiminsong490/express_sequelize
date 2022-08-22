import React, { useEffect, useState } from 'react'
import ShowComment from './ShowComment'

const Comment = () => {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const onChangeName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const onChangeComment = (e) => {
        e.preventDefault()
        setComment(e.target.value)
    }

    const onClick = async () => {
        const res = await fetch(`${process.env.REACT_APP_URL}/comments`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, comment: comment }),
        })
    }

    return (
        <>
            <div>
                <input type='text' value={name} onChange={onChangeName} />
            </div>

            <div>
                <input type='text' value={comment} onChange={onChangeComment} />
            </div>
            <button onClick={onClick}>작성</button>
            <div />
            <ShowComment></ShowComment>
        </>
    )
}

export default Comment
