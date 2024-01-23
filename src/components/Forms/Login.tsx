import React, {useState, ChangeEvent, FormEvent, ChangeEventHandler} from 'react';
import axios from "axios";


interface LoginData  {
    email: string
    password: string
}

export default function Login() {
    const [data, setData] = useState<LoginData>({
        email: "",
        password: ""
    })
    const fieldNameMap: { [key: string]: string } = {
        email: "Email",
        password: "Password",
    }
    const dataChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function loginHandler(e: any) {
        e.preventDefault()
        console.log('loginHandler30')
        axios.post("api/v1/author/login", data).then(response => {
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
            <button onClick={loginHandler} className="border-2 p-2 rounded-md text-white hover:text-fuchsia-900 hover:bg-white" style={{marginLeft: "45px"}}>Login</button>
        </form>
    )
}