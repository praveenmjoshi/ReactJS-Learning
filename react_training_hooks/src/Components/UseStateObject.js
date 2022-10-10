import React, {useState} from 'react'

function HooksWithObject() {

    const [details, setDetails] = useState({name:'', country:'', age:''})
    return (
        <form>
            <input type="text" value={details.name} onChange={event => setDetails({...details, name: event.target.value })}></input>
            <input
            type="text"
            value={details.country}
            onChange={event => setDetails({ ...details, country: event.target.value})}
            />
                
            <h2>Name: {details.name}</h2>
            <h2>Country: {details.country}</h2>
        </form>
    )
}

export default HooksWithObject
