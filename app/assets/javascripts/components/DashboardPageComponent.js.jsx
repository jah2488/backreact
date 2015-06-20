var Dashboard = React.createClass({
	render: function() {
		return (
			<div className="dashboard-page">
				<img className='welcome-image' src="/assets/home-page-visual.png" alt="Iron Rides Carpool"/>
				<div className="logout-btn">
					<button>
	  					<strong>Log Out</strong>
	  				</button>
	  			</div>	
				<div className="post-box"></div>
				<footer>
					<p>Created by Gracie, Maryna and Carissa</p>
				</footer>
			</div>
		)
	}	
});

