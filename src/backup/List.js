import React from 'react'

export default function List({listObject}) {
    return (
        <div>
            {listObject.map(Item => { return(<div key={Item.name}>{Item.name}</div>)})}
        </div>
    )
}
