// Include React 
var React = require('react');

// This is the main component. 
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			results: ""
		}
	},	

	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},

	// If the 
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log("HERE");
						console.log(data);

						this.setState({
							results: data
						})		
					}


				// This code is necessary to bind the keyword "this" when we say this.setState 
				// to actually mean the component itself and not the runQuery function.
				}.bind(this))		
		}
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1 className="text-center">New York Times Article Scrubber </h1>
						<h4 className="text-center"><em>Search, Save and Organize articles that are available on NYT</em></h4>
					</div>

					{/*<div className="col-md-6">
										
											<Form setTerm={this.setTerm}/>
					
										</div>
					
										<div className="col-md-6">
									
											<Results address={this.state.results} />
					
										</div>}*/}


				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;