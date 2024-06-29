import { useEffect, useState } from "react";
import { Card } from "../components/card";
import axios from "axios";

type exportedData = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
}

export function ExternalDataPage () {
    // https://reqres.in/api/users
    const [users, setUsers ] = useState<exportedData[]>([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
       try {
            const res = await axios.get('https://reqres.in/api/users')
            console.log(res)
            setUsers(res.data.data)
       } catch (error) {
            console.log(error)
       }
    }

    if (users.length === 0){
        return (
            <div>
                loading...
            </div>
        )
    }

    return(
              
        <div className="w-[600px] bg-slate-100 p-4  rounded-md overflow-hidden">
            <div className="grid grid-cols-2 overflow-y-auto">
            {users.map((user: exportedData) => (
                <Card
                key={user.id}
                firstname={user?.first_name}
                lastname={user?.last_name}
                email={user?.email}
                avatar={user?.avatar}
            />
            ))}
            </div>
        </div>
    )
}