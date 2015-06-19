var Welcome = React.createClass({
	render: function() {
		return (

			<div className="welcome-page">

				<button name="login-btn">
  					<strong>Log In</strong>
  				</button>
    		
				<img className="welcome-image" alt="Iron Rides Carpool"/>

				<div className="welcome-text">
          			<h1>IRON RIDES</h1>
          			<h2>A Carpooling App for Students</h2>
          			<p>Iron Rides is an application that suggests students who live in the same zipcode to carpool to campus.</p>        
  				</div>

  				<button name="join-btn">
  					<strong>Join us!</strong>
  				</button>
			</div>

		)
	}	
});