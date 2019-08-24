import React , {Component} from 'react';
import classes from './Person.css';
//import Radium from 'radium';

class Person extends Component{

        // static getDerivedStateFromProps(props,state){
        //     console.log('[Person.js] getDerivedStateFromProps');
        //     return state;
        // }

        shouldComponentUpdate(nextProps, nextState){
            console.log('[Person.js] shouldComponentUpdate');
            return true;
        }

        getSnapshotBeforeUpdate(prevProps, prevState){
            console.log('[Person.js] getSnapshotBeforeUpdate');
            //return true;
        }

        componentDidUpdate(){
            console.log('[Person.js] componentDidUpdate');
        }

        componentWillUnmount(){
            console.log('[Person.js] componantWillUnmount');
        }


        render(){
            console.log('[Persons.js] Rendering');

            return (
                <div className={classes.Person}>
                    <p onClick={this.props.click}> I am person and I'm {Math.floor(Math.random() * 30)} {this.props.name} {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </div>
            );
        }
    
}

//export default Radium(person);
export default Person;