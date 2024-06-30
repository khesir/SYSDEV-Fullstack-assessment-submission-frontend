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

// TODO: Create a backend with mysql
// TODO: Fetchs the data from the backend and render it all
export function BackendDataPage () {
  const [visibleUsers, setVisibleUsers] = useState(6);
  const [users, setUsers ] = useState<exportedData[]>([]);

  useEffect(() => {
      fetchData()
  }, [])

  const fetchData = async () => {
      try {
          const res = await axios.get('http://localhost:3000/user')
          setUsers(res.data.users[0])
      } catch (error) {
          console.log(error)
      }
  }

  const loadMore = () => {
      setVisibleUsers(prevVisibleUsers => prevVisibleUsers + 6);
  }

  return(
        <div className="w-[600px] h-screen bg-slate-100 p-4  rounded-md overflow-hidden">
          <div className=" h-full  overflow-auto">
            <div className="flex justify-end mr-2">
                <a href="/backend/form" className=" bg-slate-800 text-slate-100 px-3 py-1 rounded-md text-sm hover:bg-slate-700">
                    Add user
                </a>
            </div>
            {users.length === 0 && (
                <div className=" text-center">
                    No available users 
                </div>
            )}
            <div className=" grid grid-cols-2">
            { users.slice(0, visibleUsers).map((user: exportedData) => (
                    <Card
                        key={user.id}
                        firstname={user.first_name}
                        lastname={user.last_name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))}
                
            </div>
            {visibleUsers < users.length ? (
                <div className="flex justify-center mt-4">
                  <button
                        onClick={loadMore}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                    >
                        Load More
                    </button>
                </div>
            ) : (
              <div className="flex justify-center mt-4">
                <button
                    disabled={true}
                    className="px-4 py-2 bg-slate-300 text-white rounded-md text-sm"
                >
                    No Data
                </button>
              </div>
            )}
          </div>
      </div>
  )
}