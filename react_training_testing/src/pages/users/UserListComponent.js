import {  useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersList } from '../../app/users/usersActions';

const UserList = ({userData, fetchUsers, handleUserSelectEvent}) =>{
    
    useEffect(()=>{
        fetchUsers();
    }, [])

    return (
        <>
            <div className='userListContainer'>
                {
                    userData.loading
                    ? <div>Loading Users List</div>
                    : userData.error ? <div>Something Went wrong while fetching Users List</div>
                    : <>
                        {
                            userData.users.map((user) => <span 
                                className='userItem'
                                key={user.id}
                                data-testid = 'user-name'
                                onClick={()=>handleUserSelectEvent(user.id)}
                            >
                                {user.name}
                            </span>)
                        }
                    </>
                }
            </div>
            
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        userData: state.userState
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchUsers : () => dispatch(getUsersList())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);