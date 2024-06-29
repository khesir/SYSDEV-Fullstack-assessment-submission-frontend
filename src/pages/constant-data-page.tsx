
import { useState } from "react";
import { Card } from "../components/card";
import { sampleData } from "../constant/userData";


type exportedData = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  avatar: string
}


export function ConstantDataPage () {
    const [visibleUsers, setVisibleUsers] = useState(6);
    const users = sampleData;

    const loadMore = () => {
        setVisibleUsers(prevVisibleUsers => prevVisibleUsers + 6);
    }
    return(
                
        <div className="w-[600px] h-screen bg-slate-100 p-4  rounded-md overflow-hidden">
            <div className=" h-full  overflow-auto">
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
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Load More
                    </button>
                </div>
            ) : (
              <div className="flex justify-center mt-4">
                <button
                    disabled={true}
                    className="px-4 py-2 bg-slate-300 text-white rounded-md"
                >
                    No Data
                </button>
              </div>
            )}
            </div>
        </div>
    )
}