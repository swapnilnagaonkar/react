import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

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
        //this.state.persons[0].name = 'Pradyna';
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
        //const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons});
    }


    render() {

        const style = {
            backgroundColor: 'green',
            color : 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if(this.state.showPerson){
            persons = (
                    <div>
                        {   
                            this.state.persons.map( (person,index) => {
                                return <Person 
                                        name={person.name} 
                                        age={person.age} 
                                        click={() => this.deletePersonHandler(index)} 
                                        key={person.id} 
                                        changed={(event) => this.nameChangedHandler(event,person.id)}/> 
                            })
                        }
                    </div>
            )
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor : 'lightgreen',
                color : 'black'
            }
        }

        const classes = [];
        if(this.state.persons.length <= 2){
            classes.push('red');
            //classes = ['red','bold'].join(' ');
        }

        if(this.state.persons.length <= 1){
            classes.push('bold');
            //classes = ['red','bold'].join(' ');
        }

        return (
            <div className="App">
                <h1>Hi I'm a React APP</h1>
                <h1 className={classes.join(' ')}>This is working awesome...</h1>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Name</button>
                {persons}                    
            </div>
        );

        /*
        const style = {
            backgroundColor: 'green',
            color : 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor : 'salmon',
                color : 'black'
            }
        };
        */

        /*return (
            <StyleRoot>
            <div className="App">
                <h1>Hi I'm a React APP</h1>
                <h1 className={classes.join(' ')}>This is working awesome</h1>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Name</button>
                {persons}                    
            </div>
            </StyleRoot>
        );*/
        /*return (
            <div className="App">
                <h1>Hi I'm a React APP kl</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <button onClick={this.togglePersonHandler}>Toggle Name</button>
                { 
                    this.state.showPerson === true ? 
                    <div>
                        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler} />
                        <Person click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies</Person>
                        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                    </div> : null
                }
                {persons}
                    
            </div>
        );*/
    }
}

//export default Radium(App);
export default App;
