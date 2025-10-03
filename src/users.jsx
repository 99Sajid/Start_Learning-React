import { use } from "react"

export default function Users({fetchUsers}){

    const users =use(fetchUsers);

    

    
    return(
        <div className="bcard">
        <h1>Users: </h1>
        </div>
    )

}