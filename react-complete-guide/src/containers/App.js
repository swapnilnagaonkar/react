import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons : [
            {id : 1, name : "Max", age : 28},
            {id : 2, name : "Manu", age : 32},
            {id : 3, name : "Stephanie", age : 26}
        ],
        otherState : "other status",
        showPerson : false
    }

    switchNameHandler = (event) => {
        console.log('Was clicked!');
        this.setState({persons : [
                {name : "pradyna", age : 28},
                {name : "pooja", age : 32},
                {name : "Swapnil", age : 26}
        ]});
    }

    nameChangedHandler= (event,id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person =  {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons : persons});
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson : !doesShow})
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons});
    }

    render() {
        let persons = null;
        if(this.state.showPerson){
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
            
        }

        return (
            <div className={classes.App}>
                <Cockpit showPersons={this.state.showPerson} persons={this.state.persons} clicked={this.togglePersonHandler}/>
                {persons}                    
            </div>
        );
    }
}

export default App;
