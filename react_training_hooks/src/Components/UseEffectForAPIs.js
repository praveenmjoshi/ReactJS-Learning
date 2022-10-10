import React, {useEffect, useState} from 'react'
import PostService from '../Services/PostService';


export default function UseEffectForAPIs() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState()
    useEffect(()=>{
        PostService.getAllPosts()
        .then(response =>{
            console.log(response)
        })
        .catch(error_code =>{
            console.log(error_code)
            if (error_code == 404){
                setError('Requested content is not Found!');
            }
        })
    }, [])

    return (

        <div>
            Posts Component
            {
                error && <div>
                    {error}
                </div>
            }
        </div>
    )
}
