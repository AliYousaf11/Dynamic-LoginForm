import React, { useState } from 'react'
import './LoginForm.css'
function LoginForm() {
    const [all, setAll] = useState({
        name: "",
        email: "",
        confirmPassword: "",
        password: ""
    });
    const [record, setRecord] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAll({ ...all, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRecord = { ...all }
        // console.log(record);
        setRecord([...record, newRecord]);
        console.log(record);
        setAll({ name: "", email: "", confirmPassword: "", password: "" })
    }

    return (
        <div className='main_div'>
            <div className="box">
                <h1>Sign-Up Form</h1>
            <form action="" onSubmit={handleSubmit} >
                <div className='inputBox'>
                    <input type="text" value={all.name} onChange={handleChange}
                        autoComplete='off' name='name' required/>
                    <label htmlFor="name">Name</label>
                </div>

                <div className='inputBox'>
                    <input type="text" value={all.email} onChange={handleChange}
                        autoComplete='off' name='email' required/>
                    <label htmlFor="email">Email</label>
                </div>

                <div className='inputBox'>
                    <input type="password" value={all.confirmPassword} onChange={handleChange}
                        autoComplete='off' name='confirmPassword'required />
                    <label htmlFor="confirmPassword">ConfirmPassword</label>
                </div>

                <div className='inputBox'>
                    <input type="password" value={all.password} onChange={handleChange}
                        autoComplete='off' name='password' required/>
                    <label htmlFor="password">Password</label>
                </div>
                <input type="submit"  name='' value="Submit" />
            </form>
            </div>

            <div className='table'>
                    <h1>USER INFORMATION</h1>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Password</td>
                        <td>Mail</td>
                        <td>ConPassword</td>
                    </tr>
                    {
                    record.map((i, ii) =>
                        <tr>
                            <td>{ii}</td>
                            <td>{i.name}</td>
                            <td>{i.confirmPassword}</td>
                            <td>{i.email}</td>
                            <td>{i.password}</td>
                        </tr>
                    )
                }
                </table>
            </div>
            
        </div>
    )
}

export default LoginForm