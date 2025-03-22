import React, { useState } from 'react'

const AddPlayer = ({ addPlayer, onCancel }) => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [nationality, setNationality] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    }
    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        AddPlayer(
            {
                name,
                position,
                nationality,
                age: Number(age),
            }
        );
        setName("");
        setPosition("");
        setNationality("");
        setAge("");
    }
    return (
        <div>
            <h2>Add Player</h2>
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
                    <label>Nationality:</label>
                    <input type="text" value={nationality} onChange={handleNationalityChange} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={handleAgeChange} />
                </div>
                <div>
                    <button type="submit" >Add</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlayer
