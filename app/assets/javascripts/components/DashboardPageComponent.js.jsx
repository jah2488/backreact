var Dashboard = React.createClass({
	getInitialState: function() {
    	return {data: []};
  	},
	render: function() {
		return (
			<div className="dashboard-page">

				<button className="logout-btn" onClick={this.logOut}>
                   <strong>Log Out</strong>
                </button>

	  			<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>

	  			<h2>Post Stuff!</h2>
	  			
				<div className="post-box">
			
					

				</div>

				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		);
	}
});

