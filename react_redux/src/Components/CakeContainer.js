import React from 'react';
import { connect } from 'react-redux';
import { buyCake} from '../redux';

function CakeContainer(props) {
    console.log(props)
    return (
        <div>
            <h4>Cake Shope</h4>
            <p>Number of cakes - {props.numOfCakesProp} </p>
            <button onClick={props.buyCakeAction}> Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        numOfCakesProp: state.cakeState.numOfCakes
        // numOfCakesProp is a property which will be used in component which will correspond to numOfCake property in state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCakeAction: () => dispatch(buyCake())
        // buyCakeAction is a dispatch method which will be called from component which inturn dispatch actual actions buyCake
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CakeContainer)
// connect function connects mapStateToProps, mapDispatchToProps methods to cakeContainer component
// That means connect function connects react functions to redux store