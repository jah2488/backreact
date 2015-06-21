var Login = React.createClass({
	render: function() {

		return (
			<div className="login-page">
				<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>
				<h2>Log in or sign up to start riding with your classmates!</h2>

				<form className="login-form">
					<label className="form-label">Email</label><br/>
					<input type="email" ref="email" className="input-box" placeholder="Enter your email"/><br/>
					
					<label className="password">Password</label><br/>
					<input type="password" ref="password" className="input-box" placeholder="Enter your password"/><br/>
					
					<div className="error-msg" ref='error'></div>

					<button className="login-btn" onClick={this.submitLogin}>
						 <strong>Log In</strong>
					</button><br/>

					<button className="sign-up-btn" onClick={this.gotoSignup}>
						<strong>Sign up</strong>
					</button>
				</form>
				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		)
	},
	gotoSignup: function(e) {
		e.preventDefault();
		app.navigate('/signup', {trigger: true});
	},
	submitLogin: function(e) {
		e.preventDefault();
		var email = this.refs.email.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;
		var error = this.refs.error.getDOMNode();

		if(!email) {
			error.innerHTML = 'Please enter your email';
		} else if(!password) {
			error.innerHTML = 'Please enter your password';
		} else {
			$.ajax({
				url: 'https://calm-thicket-5529.herokuapp.com/users', 
				dataType: 'json', 
				type: 'GET', 
				success: function(data){
					var newUser = true;
					var wrongPassword = false;
					for(var i=0; i<data.length; i++) {
						if(email == data[i].email) {
							newUser = false;
							break;
						} else if(email == data[i].email && password !== data[i].password) {  // have to fix this part
							wrongPassword = true;
							break;
						}
					}			
					if(newUser) {
						error.innerHTML = 'The user is not found. Please sign up'
					} else if(wrongPassword) {
						error.innerHTML = 'The password is incorrect'
					} else {
						app.navigate('/search/zip_code/', {trigger: true});
					}
				}
			});
		}
	}
});
