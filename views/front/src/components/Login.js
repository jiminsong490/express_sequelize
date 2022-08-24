import React, { useEffect, useState } from 'react'

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onChangeName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const onChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    // const onClick = async () => {
    //     const res = await fetch(`${process.env.REACT_APP_URL}/comments`, {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name: name, comment: comment }),
    //     })
    // }

    return (
        <>
            <form action='/login' method='post'>
                <div>
                    <input
                        type='text'
                        name='username'
                        value={name}
                        onChange={onChangeName}
                    />
                </div>

                <div>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>
                <button type='submit'>로그인</button>
                <div />
            </form>
        </>
    )
}

export default Login
