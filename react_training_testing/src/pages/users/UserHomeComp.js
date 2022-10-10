import UserList from "./UserListComponent"
import UserDetails from "./UserDetailComponent"
import { useState } from "react";
const UserHomeComp = () =>{
    const [ userId, setUserId ] = useState()
    return (
        <>
            <div className="HomeContainer" >
                <UserList handleUserSelectEvent={setUserId}/>
                <UserDetails userId={userId}/>
            </div>
        </>
    )
}

export default UserHomeComp;