import React, {useState, ChangeEvent, FormEvent, ChangeEventHandler} from 'react';
import axios from "axios";

interface RegistrationData  {
    email: string
    password: string
    firstName: string
    lastName: string
}

export default function Registration() {
    const [data, setData] = useState<RegistrationData>({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })
    const fieldNameMap: { [key: string]: string } = {
        email: "Email",
        password: "Password",
        firstName: "First Name",
        lastName: "Last Name"
    }
    const dataChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.value)
        setData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function registerHandler() {
        axios.post("http://localhost:3000/api/v1/author/create", data).then(response => {
            console.log(response)
        })
    }

    return (
        <form className="bg-fuchsia-900 mx-auto w-fit px-11 py-11 mt-24 rounded-md">
            {Object.entries(data).map(([key, val], index) => {
                return (
                    <div key={index} className="text-center">
                        <label className="text-white">{fieldNameMap[key]}</label>
                        <br /><br />
                        <input className="px-2 py-1 rounded-md border-white outline-0" name={key} onChange={dataChangeHandler} value={val}/>
                        <br /><br />
                    </div>
                )
            })}
            <button onClick={registerHandler} className="border-2 p-2 rounded-md text-white hover:text-fuchsia-900 hover:bg-white" style={{marginLeft: "45px"}}>Register</button>
        </form>
    )
}