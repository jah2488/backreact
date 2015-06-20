var Welcome = React.createClass({
	render: function() {

		return (

			<div className="welcome-page">
    		
				<img className="welcome-image" src="images/home-page-visual.png" 
            alt="Iron Rides Carpool"/>

				<div className="welcome-text">

          			<h1>IRON RIDES</h1>

          			<h2>A Carpooling App for Students</h2>
                
          			<p>Iron Rides is an application that suggests students who live 
                  in the same zipcode to carpool to campus. Meet your classmates 
                  and take some cars of the roads.</p>        
  				</div>

  				<button className="join-btn">
  					<strong>Sign Up!</strong>
  				</button>

            <button className="login-btn">
            <strong>Log In</strong>
          </button>

			</div>

		)
	}	
});

