import React, { useState } from 'react'

const EditPlayer = ({ player, editPlayer, onCancel }) => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [age, setAge] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPlayer = {
            name,
            position,
            age: Number(age),
        };
        editPlayer(updatedPlayer);
    }

    return (
        <div>
            <h2>Edit Player</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Position:</label>
                    <input type="text" value={position} onChange={handlePositionChange} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={handleAgeChange} />
                </div>
                <div>
                    <button type="submit" >Edit</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditPlayer
