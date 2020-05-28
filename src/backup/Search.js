import React from 'react'

export default function Search({action, value}) {
    return (
        <div>
            <input type="text" placeholder="Search :" value={value} onChange={action}/>
        </div>
    )
}
