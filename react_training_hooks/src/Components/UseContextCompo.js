import React,{ useContext } from 'react'
import { userContext, productContext } from '../App';

// Without using useContext Hooks, consuming multiple Contexts is not at greate convinience.
// function UseContextCompo() {
//     return (
//         <div>
//            <userContext.Consumer>
//                {
//                    user =>{
//                        return(
//                            <productContext.Consumer>
//                                {
//                                    product =>{
//                                        return <div>Hello {user} Welcom to {product}</div>
//                                    }
//                                }
//                            </productContext.Consumer>
//                        )
//                    }
//                }
//             </userContext.Consumer> 
//         </div>
//     )
// }


//  Below is the function using useContext Hook.
function UseContextCompo(){
    const user = useContext(userContext)
    const product = useContext(productContext)
    return(
        <div>
            Hello {user} Welcome to {product} 
        </div>
    )
}
export default UseContextCompo
