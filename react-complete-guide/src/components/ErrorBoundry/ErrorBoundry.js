import React, { Componant } from 'react';

class ErrorBoundry extends Componant {
    
    state = {
        hasError : false,
        errorMessages : ''
    }

    componantDidCatch = (error, info) => {
        this.setState({hasError : true, errorMessages : error});
    }
    
    render(){
        if( this.state.hasError ){
            return <h1>{this.state.errorMessages}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;