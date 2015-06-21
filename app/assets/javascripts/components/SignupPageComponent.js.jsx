
var Signup = React.createClass({
	render: function() {
		return (
			<div className='Signup-page'>
				<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>
				<h2>We need your information!</h2>
				<div className='form'>
					<form className='Signup-form' onSubmit={this.submitSignup}>
						<label className='form-label'>Username</label> &nbsp;
						<input type='text' ref='signupUsername' className='input-box' placeholder='Enter your username' />
						<br/>
						
						<label className='form-label'>password</label> &nbsp;
						<input type='password' ref='signupPassword' className='input-box' placeholder='Enter your password' />
						<br/>
						
						<label className='form-label'>Confirm your password</label> &nbsp;
						<input type='password' ref='signupPasswordConfirm' className='input-box' placeholder='Confirm your password' />
						<br/>
						
						<label className='form-label'>Email</label>&nbsp;
						<input type='email' ref='signupEmail' className='input-box' placeholder='Enter your email' />
						<br/>
						
						<label className='form-label'>Phone number</label> &nbsp;
						<input type='text' ref='signupPhone' className='input-box' placeholder='Enter your phone number' />
						<br/>
						
						<label className='form-label'>Address</label> &nbsp;
						<input type='text' ref='signupAddress' className='input-box' placeholder='3601 S Congress Ave, Austin, TX' />
						<br/>
						
						<label className='form-label'>Zip Code</label> &nbsp;
						<input type='text' ref='signupZip' className='input-box' placeholder='78704' />
						<br/>
						
						<div className='error-msg' ref='errror'></div> 
						<button type='submit' ref='signupSubmit' className='submit-btn'>submit</button>
					</form>
				</div>
				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		);
	},
	submitSignup: function(e) {
		e.preventDefault();
		var user = new UserModel({
			username: this.refs.signupUsername.getDOMNode().value,
			password: this.refs.signupPassword.getDOMNode().value,
			password_confirmation: this.refs.signupPasswordConfirm.getDOMNode().value,
			email: this.refs.signupEmail.getDOMNode().value,
			phone: this.refs.signupPhone.getDOMNode().value,
			zip_code: this.refs.signupAddress.getDOMNode().value,
			address: this.refs.signupZip.getDOMNode().value
		});
		if(!user.isValid) {
			this.refs.errror.getDOMNode().innerHTML = user.validationError;
		} else {
			// send data to the server
		}
	}
});

