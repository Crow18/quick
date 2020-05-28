import React, {useState} from 'react'

function Test() {
    const [count, setCount] = useState(5);
    const increment = () => setCount(count + 1);
    const name = "Carl";
    return({count, increment, name})
}


export default function Count() {
    const [p, sp] = useState('Tets');
    const handleChange = event => {return(sp(event.target.value))};
    return (
        <div>
            <input type="text"  onChange={handleChange}/>
            <button >{p}</button>
        </div>
    )
}
