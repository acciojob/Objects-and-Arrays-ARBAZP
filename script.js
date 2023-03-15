const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };


// Create a reference to players array using the variable team
const team = players;

// Create a copy of players array using the spread operator
const team1 = [...players];

// Create a copy of person object using Object.assign()
const cap1 = Object.assign({}, person);
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement


export {players,person,team,team1,cap1}
