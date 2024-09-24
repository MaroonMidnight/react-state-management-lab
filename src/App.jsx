// src/App.jsx
import {useState} from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  )

  const handleAddFighter = (newFighter) => {
    if (money >= newFighter.price) {
      setMoney(money - newFighter.price)
      setTotalStrength(totalStrength + newFighter.strength)
      setTotalAgility(totalAgility + newFighter.agility)
      setTeam([...team,newFighter])
    } else {
      alert("Not enough money")
      return
    }
  }

  const handleRemoveFighter = (index, member) => {
    const newTeam = [...team.slice(0, index), ...team.slice(index + 1)]
    setTotalStrength(totalStrength - member.strength)
    setTotalAgility(totalAgility - member.agility)
    setMoney(money + member.price)
    setTeam(newTeam)
  }

  return (
    <div className='Fighters'>
      <h1>Zombie Fighters</h1>
      <p>{!team ? "Pick some team members!" : 'Team Members: ' + team.length}</p>
      <div>
        Money: {money}
      </div>
      <div>
        Total Strength: {totalStrength}
      </div>
      <div>
        Total Agility: {totalAgility}
      </div>
      Team <div className='team'>
      {team.map((member, index) => 
      <div key={index}>
        <li>Name: </li>
        <li>{member.name}</li>
        <img src={member.img}/>
        <br/>
        <li>Price: {member.price}</li>
        <li>Strength: {member.strength}</li>
        <li>Agility: {member.agility}</li>
        <button onClick={() => handleRemoveFighter(index, member)}>Remove</button>
      </div>
      )}
      </div>
      <br/>
      <div className='zombies'>
      {zombieFighters.map((zombieFighter, index) =>
      <div key={index}>
        <li>Name: </li>
        <li>{zombieFighter.name}</li>
        <img src={zombieFighter.img}/>
        <li>Price: {zombieFighter.price}</li>
        <li>Strength: {zombieFighter.strength}</li>
        <li>Agility: {zombieFighter.agility}</li>
        <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
      </div>
      )}
    </div>
    </div>
  );
}

export default App

