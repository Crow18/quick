import React from 'react'

export default function List({listObject}) {
    return (
       
            listObject.map(listValue => {return(<div key={listValue.name}>{listValue.name}</div>)})
        
    )
}
