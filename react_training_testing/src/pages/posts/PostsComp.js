import { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../../app/posts/postsActions';


const PostsComp = ({postsState, getchPosts}) =>{
    useEffect(()=>{
        getchPosts();
    }, [])

    return(
        <>
            <h4>Posts </h4>
            {
                postsState.loading ? <div> Loading Posts ...!</div>
                : postsState.error ? <div> Error while loading posts </div>
                : <div className='postsContainer'>
                    {
                        postsState.posts.map((post,index) =>
                            <div className='postItem' key={index}>
                                <h6>{post.title}</h6>
                                <p>{post.body}</p>
                            </div>
                        )
                    }
                </div>
            }
        </>
        
    )
}

const mapStateToProps = (state) =>{
    return{
        postsState: state.postsState
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getchPosts : ()=> dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsComp);
