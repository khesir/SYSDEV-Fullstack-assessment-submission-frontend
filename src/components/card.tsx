
interface CardProps {
    firstname: string,
    lastname: string,
    email: string,
    avatar: string
}

export function Card ({
    firstname,
    lastname,
    email,
    avatar
}: CardProps) {

    return(
        <div className=" bg-slate-100 shadow-md m-2 p-2 flex text-slate-800">
          
            <img
                src={avatar === "n/a" ? "../assets/default.jpg" : avatar}
                width={100}
                height={100}
                alt="User avatar"
                className="rounded-xl object-cover"
            />
            <div className="flex flex-col justify-between py-2">
                <div className="ml-2 text-lg font-semibold">
                    <p>{lastname+", "+firstname}</p>

                </div>
                
                <div className=" text-sm font-medium ">
                    <a href={"mailto:"+email} className="ml-2 border-slate-400 border px-2 py-1 rounded-lg">
                        Contact
                    </a>
                </div>
            </div>
           

        </div>
    )
}