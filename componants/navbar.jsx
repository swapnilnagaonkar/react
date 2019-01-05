class NavBar extends React.Component {
    render() {    	
    	return (
    		<React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
    		</React.Fragment>
    	); 
    }
}