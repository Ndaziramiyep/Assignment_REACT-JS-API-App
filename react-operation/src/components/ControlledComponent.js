import React, {useState} from 'react'
const ControlledComponent = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <h2> Controlled Component</h2>
            <input type="text" value = {inputvalue} onchange = {(e) => setInputValue(e.target.value)} />
            <p>Input value: {inputValue}</p>
        </div>
    )
}
export default ControlledComponent;