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

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({counters});
        console.log('event Handler increment',counter);
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters:counters});
        console.log('event Handler calls',counterId);
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {c.value = 0; return c;})
        this.setState({counters:counters});
    }

    render() {    	
    	return (
    		<React.Fragment>
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>RESET</button>
                {this.state.counters.map(counter => <Counter key={counter.id} onIncrement={this.handleIncrement} onDelete={this.handleDelete} value={counter.value} id={counter.id
                }  selected={true} counter={counter}> 
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
    		</React.Fragment>
    	); 
    }
}