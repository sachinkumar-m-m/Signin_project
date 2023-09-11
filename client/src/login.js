import React,{useState, useEffect} from 'react'
import axios from 'axios'




function Login() {
    const [formData, setFormdata] = useState([]);

    const handleChange = (e) =>{
        e.preventDefault();
        const [name, value] = e.target.value
        setFormdata({...formData, [name]:value})
    }
    const handleSubmit = (e) =>{
        axios.post(`http://localhost:5000/login`, formData)
        .then((res)=>console.log(res.data))
        .catch((err) => console.log(err))
    }
    const handleClose = (e) =>{
        setFormdata('')
        console.log("close");
    }
  return (
    <div>
        <form action="">
        <div>
                    <label htmlFor="" onClick={handleSubmit}>Email</label>
                    <input type="text"
                        placeholder='Enter Email'
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text"
                        placeholder='Enter Password'
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="submit" onClick={handleClose}>Cancel</button>

                </div>
        </form>

    </div>
  )
}

export default Login