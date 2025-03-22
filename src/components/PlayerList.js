import React from 'react'

const PlayerList = ({players, onEdit, onDelete}) => {
  return (
    <div>
      <h2>Player List</h2>
      <ul>
        <thead>
          <tr>
            <th>ID</th>
            <th>Age</th>
            <th>Name</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
            <td>{player.id}</td>
            <td>{player.name}</td>
            <td>{player.age}</td>
            <td>{player.position}</td>
            <td>
              <button onclick={() => onEdit(PlayerList.id)}>Edit</button>
              <button onclick={() => onDelete(PlayerList.id)}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </ul>
    </div>
  )
}

export default PlayerList
