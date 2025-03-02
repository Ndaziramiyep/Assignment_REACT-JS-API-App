import React, {useState} from 'react'
const FormSubmission = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
});
const handleInputChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]:e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, eg., send data to API
};
    return (
        <div>
            <h2> Form Submission</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    username:
                    <input type='text' name='username' value = {formData.username} onChange = {handleInputChange}/>
                </label>
                <label>
                password:
                <input type='password' name='password' value={formData.password} onChange={handleInputChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};
export default ControlledComponent;