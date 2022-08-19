import React, { useState } from 'react'

const Start = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onNameChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const onPasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const onClick = async () => {
        if (name !== '' && password !== '') {
            const res = await fetch('http://localhost:3000/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // json이라는 것을 미리 명시 (없으면 req.body가 빈 객체가 될 수 있음)
                },
                body: JSON.stringify({ name: name, password: password }),
            })
            const result = await res.json()
        }
    }

    return (
        <>
            <div>
                <input type='email' value={name} onChange={onNameChange} />
            </div>

            <div>
                <input
                    type='password'
                    value={password}
                    onChange={onPasswordChange}
                />
            </div>
            <button onClick={onClick}>login</button>
        </>
    )
}
export default Start
