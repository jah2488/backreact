var Welcome = React.createClass({
	render: function() {

		return (

			<div className="welcome-page">

				<img className='welcome-image'/>

				<div className="welcome-text">

					<h1>IRON RIDES</h1>

					<h2>A Carpooling App for Students</h2>

					<p>Iron Rides is an application that groups students together
						by their zipcodes and provides them with contact information
						so that they can start a conversation with their classmates about carpooling to campus.
						<br />
						<strong>Sign up! Meet your classmates and take some cars off
						the roads!</strong>
					</p>

				</div>

				<button className="join-btn">
					<strong>Sign Up!</strong>
				</button>

				<button className="login-btn">
					<strong>Log In</strong>
		  		</button>

		  		<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		)
	}
});

