//ReactDOM.render(<h1>Hello React js!</h1>,document.getElementById('root'));
//const element = <h1>Hello World!</h1>;
//console.log(element);
/*ReactDOM.render(<Counter />,document.getElementById('root'));*/

class App extends React.Component {
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
            <NavBar  totalCounters={this.state.counters.filter(c => c.value > 0).length} />
            <NavBarSFC  totalCounters={this.state.counters.filter(c => c.value > 0).length} />
            <main className="container">
                <Counters 
                counters={this.state.counters}
                onReset={this.handleReset} 
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                />
            </main>
    		</React.Fragment>
    	); 
    }
}


 				