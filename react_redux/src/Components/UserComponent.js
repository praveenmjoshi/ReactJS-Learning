import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchUsersList } from '../redux/user/userActions';


function UserComponent({userData, fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    }, [])
    
    return userData.loading? ( <div>Loading...</div>)
    : userData.error? ( <div>{userData.error}</div>)
    : (
        <div>
            <h2>Users list</h2>
            <div>
                {
                    userData 
                    && userData.users 
                    && userData.users.map((user, index) => <p key={index}>{user.name}</p>)

                }
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        userData: state.userState
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers : () => dispatch(fetchUsersList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
