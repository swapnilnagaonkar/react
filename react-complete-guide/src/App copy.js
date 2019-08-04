//import React, { Component } from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = (props) => {

    const [personState, setPersonState]  = useState({
        persons : [
            {
                name : "MAx", age : 28
            },
            {
                name : "Manu", age : 32
            },
            {
                name : "Stephanie", age : 26
            }
        ],
        otherState : "other statute"
    });

    console.log(personState);

    const  switchNameHandler = () => {
        //console.log('Was clicked!');
        //this.state.persons[0].name = 'Pradyna';
        setPersonState({persons : [
            {
                name : "pradyna", age : 28
            },
            {
                name : "pooja", age : 32
            },
            {
                name : "Swapnil", age : 26
            }
        ]});
    }
//class App extends Component {
    /*state = {
        persons : [
            {
                name : "MAx", age : 28
            },
            {
                name : "Manu", age : 32
            },
            {
                name : "Stephanie", age : 26
            }
        ],
        otherState : "other statute"
    }

    switchNameHandler = () => {
        console.log('Was clicked!');
        this.state.persons[0].name = 'Pradyna';
        this.setState({persons : [
            {
                name : "pradyna", age : 28
            },
            {
                name : "pooja", age : 32
            },
            {
                name : "Swapnil", age : 26
            }
        ]});
    }*/

    //render() {
        return (
            <div className="App">
                <h1>Hi I'm a React APP</h1>
                <button onClick={switchNameHandler}>Switch Name</button>
                <Person name={personState.persons[0].name} age={personState.persons[0].age} />
                <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies</Person>
                <Person name={personState.persons[2].name} age={personState.persons[2].age} />
            </div>
        );
    //}
}

//export default App;
export default app;
