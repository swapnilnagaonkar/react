class Counters extends React.Component {
    state = {
        counters : [
            {id : 1 , value : 5},
            {id : 2 , value : 4},
            {id : 3 , value : 0},
            {id : 4 , value : 0},
            {id : 5 , value : 0},
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters:counters});
        console.log('event Handler calls',counterId);
    }

    render() {    	
    	return (
    		<React.Fragment>
                {this.state.counters.map(counter => <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id
                }  selected={true} counter={counter}> 
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
    		</React.Fragment>
    	); 
    }
}