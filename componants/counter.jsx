class Counter extends React.Component {
    state = {
    	count : 0,
    	tags_1 : ['tag1','tag2','tag3'],
    	tags : ['tag1','tag2','tag3'],
        value_01 : this.props.value,
        value : this.props.counter.value,
    };

    krishna = {kirtan:'harinam'};
    styles = {fontSize : 20};
    /*constructor(){
    	super();
    	this.handleIncrement = this.handleIncrement.bind(this);
    	//console.log('this is constructor : ', this);
    }*/

    handleIncrement(){
    	console.log('Increment Clicked',this);
    }

    handleIncrement2 = () => {
    	this.state.count++;
    	this.setState({count: this.state.count});
    	console.log('Increment Clicked2',this, this.state.count);
    }

    handleIncrement3 = product => {
    	this.state.count++;
    	this.setState({count: this.state.count});
    }

    handleIncrementmy = () => {
        this.state.value++;
        console.log('HSD', this.state.value);
        this.setState({value: this.state.value});
    }

    render() {  
        console.log(this.props)  
        let classes = this.getBadgeClasses();   
        return (
            <div>
                {this.props.children}
                <span className={classes} style={this.styles}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>DELETE</button>

            </div>
            ); 
    }

    render_old3() {  
        console.log(this.props)  
        let classes = this.getBadgeClasses();   
        return (
            <div>
                {this.props.children}
                <span className={classes} style={this.styles}>{this.formatCount()}</span>
                <button onClick={this.handleIncrementmy} className="btn btn-secondary btn-sm">Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.id)}>DELETE_old</button>

                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>DELETE</button>

            </div>
            ); 
    }

    render_old2() {    
    	let classes = this.getBadgeClasses();	
    	return (
    		<React.Fragment>
    			<span className={classes} style={this.styles}>{this.formatCount()}</span>
    			<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
    			<button onClick={this.handleIncrement2} className="btn btn-secondary btn-sm">Increment2</button>
    			<button onClick={() => this.handleIncrement3(product)} className="btn btn-secondary btn-sm">Increment3</button>
    			{this.state.tags.length === 0 && 'Please enter new tags' }
    			<div>{this.renderTags()}</div>    			
    		</React.Fragment>
    		); 
    }

    renderTags(){
    	if(this.state.tags.length === 0) return (
    		<React.Fragment>
    			HI THIS IS MY RENDERS
    		</React.Fragment>
    		);
    	return <ul>{this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}</ul>
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount (){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses_old3(){
    	let classes = "badge m-2 badge-";
    	classes += (this.state.count === 0) ? "warning" : "primary";
    	return classes;
    }

    formatCount_3(){
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }

    formatCount2(){
    	const {count} = this.state;
    	return count === 0 ? "Zero" : count;
    }

    render_old() {
    	let classes = this.getBadgeClasses();
    	return (
    		<React.Fragment>
    			<span className={classes} style={this.styles}>{this.formatCount()}</span>
    			<button className="btn btn-secondary btn-sm">Increment</button>
    			<span style={{fontSize:100}}>{this.krishna.kirtan}</span>
    			<ul>
    				<li>{this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}</li>
    			</ul>
    		</React.Fragment>
    		); 
    }

}