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
    render() {    	
    	return (
    		<React.Fragment>
                {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value}  selected={true}> 
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
    		</React.Fragment>
    	); 
    }
}