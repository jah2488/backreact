var FindCar = React.createClass({
	render: function() {

		return (

			<div className="ride-results-page">

				<button className="logout-btn">
  					<strong>Log Out</strong>
  				</button>	

				<div className="logo"alt="Iron Rides logo">
				</div>

				<select className="Zipcode">
    				<option value="78701" selected>78701</option>
   					<option value="78703">78703</option>
    				<option value="78704">78704</option>
  					<option value="78733">78733</option>
  					<option value="78746">78746</option>
    				<option value="78702">78702</option>
  				</select>

				<select className="Direction">
    				<option value="North" selected>North</option>
    				<option value="South">South</option>
   					<option value="East">East</option>
  					<option value="West">West</option>
  				</select>

  				<button className="submit-btn">
  					<strong>Submit</strong>
  				</button>

				<div className="results-box">
					<h2>Start the carpool conversation!<br>
					You can ride with these classmates!</h2>
					<ul>
						<li>Name</li>
						<li>Address</li>
						<li>Phone Number</li>
						<li>Email</li>
					</ul>

				</div>
  			</div>
		)
	}	
});


