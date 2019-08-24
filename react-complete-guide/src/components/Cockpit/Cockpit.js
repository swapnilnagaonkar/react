import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => {
           //alert('Saved data to load');
        },1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js]  cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js]  cleanup work in 2nd useEffect');
        };
    });

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
    <h1>{props.title}</h1>
    <h1 className={assignedClasses.join(' ')}>This is working awesome...</h1>
    <button className={btnClass} onClick={props.clicked}>Toggle Name</button>
    </div>
    );
};

export default cockpit;