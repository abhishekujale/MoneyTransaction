import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {

    const fetchdata=()=>
    {
        const res = axios.get("http://localhost:3000/api/v1/account/balance", {
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        
        })
        console.log(res.data.balance)
    }
    const [amount,setAmount]=useState(0)

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users/>
        </div>
    </div>
}