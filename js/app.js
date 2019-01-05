//ReactDOM.render(<h1>Hello React js!</h1>,document.getElementById('root'));
//const element = <h1>Hello World!</h1>;
//console.log(element);
/*ReactDOM.render(<Counter />,document.getElementById('root'));*/

class App extends React.Component {
    render() {    	
    	return (
    		<React.Fragment>
            <NavBar />
            <main className="container">
                <Counters />
            </main>
    		</React.Fragment>
    	); 
    }
}


 				