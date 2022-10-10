
import { useEffect} from 'react';
import { get } from '../../services/HttpService';
import { getUserDetails } from '../../app/users/usersActions';
import { connect } from 'react-redux'
import { userContext } from '../../App';
const UserDetails = ({userDetaiState, fetchUserDetail, userId}) =>{

    const userContext = userContext
    useEffect(()=>{
            if(userId){
                fetchUserDetail(userId)
            }                   
    }, [ userId ]);

    return (
            <>
            <userContext.Consumer>
                {
                    (value)=> { console.log(value)}
                }
                <div className='UserDetailContainer'>
                    {
                        userDetaiState.loading 
                        ? <div> User Details Loading</div>
                        :  userDetaiState?.error
                        ? <div>Error getting user detail</div> 
                        : userDetaiState.user?.name ?<>
                            <div>

                                <h3 data-testid="username">Name: {userDetaiState.user?.name} </h3>
                            </div>
                        </>
                        : <>
                            <h2>Display default data</h2>
                        </>
                    }
                </div>
            </userContext.Consumer>
            </>
        )
}

const mapStateToPros = (state) =>{
    return{
        userDetaiState: state.userDetailState
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchUserDetail: (id) => dispatch(getUserDetails(id))
    }
}

export default connect(mapStateToPros, mapDispatchToProps )(UserDetails);