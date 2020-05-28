import React from 'react'

export default function Search({action, value}) {
    return (
        <div>
            <input type="text" placeholder="Search :" onChange={action} value={value}/>
        </div>
    )
}
