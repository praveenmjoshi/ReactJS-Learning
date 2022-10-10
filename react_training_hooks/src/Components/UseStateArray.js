import React, {useState} from 'react'

function UseStateArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([ ...items, {
            id: items.length,
            value: items.length * 2
        }])
    }

    return (
        <div>
                <button onClick={addItem}>Add Item to List</button>
                <button onClick={() => setItems([])}>Reset List</button>
                {
                    items.map(item => <li key={item.id}> {item.value} </li>)
                }
        </div>
    )
}

export default UseStateArray
