import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Register() {
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const [name, value] = e.target.value;
        setFormdata({ ...formData, [name]: value })
    }
    const handleSubmit =async  (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/register`, formData)
        .then((response) =>console.log(response.data))
        .catch((err)=>console.log(err))

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text"
                        placeholder='Enter Name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text"
                        placeholder='Enter Email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"
                        placeholder='Enter Password'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register