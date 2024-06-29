
interface NavLinkProps{
    status: boolean,
    name: string,
    href: string,
}

export function NavLink({
    status,
    name,
    href
}: NavLinkProps) {
    
    return(
        <a 
            href={href}
            className={status === true ? " bg-slate-600 text-white p-2 rounded-md cursor-pointer" : "cursor-pointer"}
        >
            {name}
        </a>
    )
}