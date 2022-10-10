import { useNavigate } from 'react-router-dom';
import { USERS } from '../data'


const Users = () => {
    const getName = (user) =>{
        return user['name'] + ' ' + user['lastname']
    }
    const navigate = useNavigate();
    return(
        <>
            <h3>Users Component</h3>
            {
                USERS.map((user, index) =>(
                    (
                        <div key={index} className="user-container">
                            <span>{getName(user)}</span>
                            <button onClick={() => navigate('/details')}>Show Details</button>
                        </div>
                    )
                ))
            }
           
        </>
    )
}

export default Users;