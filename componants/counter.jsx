class Counter extends React.Component {
    state = {
    	count : 0,
    	tags_1 : ['tag1','tag2','tag3'],
    	tags : ['tag1','tag2','tag3'],
    };

    krishna = {kirtan:'harinam'};

    styles = {fontSize : 50};

    handleIncrement(){
    	console.log('Increment Clicked');
    }

    render() {    	
    	return (
    		<React.Fragment>
    			<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
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
    	classes += (this.state.count === 0) ? "warning" : "primary";
    	return classes;
    }

    formatCount(){
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