import React from 'react';
import Person from './Person/Person';


const person = (props) => props.persons.map( (person,index) => {
    console.log('[Persons.js] Rendering.....');
    return <Person 
            name={person.name} 
            age={person.age} 
            click={() => props.clicked(index)} 
            key={person.id} 
            changed={(event) => props.changed(event,person.id)}/> 
});

export default person;
