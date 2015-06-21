var FindCar = React.createClass({
	render: function() {

		return (			
			<div className="ride-results-page">
				<div className='header-btn'>
					<button className="logout-btn" onClick={this.logOut}>
  						<strong>Log Out</strong>
  					</button>
  				</div>	

				<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>

				<form className='search-form' onSubmit={this.findClassmate}>
					<label className='form-label' ref='zipCode'>Enter your ZIP Code</label><br/>
					<input type='text' ref='searchZip' className='input-box' placeholder='ZIP Code' /><br/>

	  				<button className="submit-btn">
	  					<strong>Submit</strong>
	  				</button>
	  			</form>
	  			<div>
	  				<h2>
		  				Start the carpool conversation!<br/>
						You can ride with these classmates!
					</h2>
				</div>
				<div className="results-box">
					<SearchResults />  //?????????
				</div>
				<footer>
					<p>Created by Gracie, Maryna and Carissa</p>
				</footer>
  			</div>
		)
	},
	findClassmate: function(e) {
		e.preventDefault();
		var zip = this.refs.searchZip.getDOMNode().value;
		var user = this.refs.user.getDOMNode();
		var address = this.refs.address.getDOMNode();
		var phone = this.refs.phone.getDOMNode();
		var email = this.refs.email.getDOMNode();

		$.ajax({ 													
			url: 'https://calm-thicket-5529.herokuapp.com/search/zip_code/' + zip, 
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				for(var i=0; i<data.length; i++) {
					if(zip == data[i].zip_code) {
						user.innerHTML = data[i].username;
						address.innerHTML = data[i].address;
						phone.innerHTML = data[i].phone;
						email.innerHTML = data[i].email;
					}
				}
				if(existedUser == true) {
					error.innerHTML = 'Please choose another username';
				} else if(!user.isValid()) {
					error.innerHTML = user.validationError;
				} else {
					var newUser = user.attributes;
					$.ajax({
						url: 'https://calm-thicket-5529.herokuapp.com/users', 
						dataType: 'json', 
						type: 'POST', 
						data: newUser
					});
					app.navigate('/search/zip_code/', {trigger: true});
				}
			} 
		});
		
	},
	logOut: function() {
		app.navigate('', {trigger: true});
	}	
});