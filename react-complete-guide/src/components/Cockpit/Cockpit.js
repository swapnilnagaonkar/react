import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
        
    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
        //classes = ['red','bold'].join(' ');
    }

    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);
        //classes = ['red','bold'].join(' ');
    }

    return (
    <div className={classes.Cockpit}> 
    <h1>Hi I'm a React APP</h1>
    <h1 className={assignedClasses.join(' ')}>This is working awesome...</h1>
    <button className={btnClass} onClick={props.clicked}>Toggle Name</button>
    </div>
    );
};

export default cockpit;