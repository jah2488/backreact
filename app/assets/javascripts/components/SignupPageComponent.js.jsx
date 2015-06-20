
var Signup = React.createClass({
	render: function() {
		return (
			<div className='Signup-page'>
				<div className='logo' alt='Iron Rides Logo'></div>
				<div className='form'>
					<form className='Signup-form' onSubmit={this.submitSignup}>
						<label className='form-label'>Username
							<input type='text' ref='signupUsername' className='input-box' placeholder='Enter your username' />
						</label>
						<label className='form-label'>Password
							<input type='password' ref='signupPassword' className='input-box' placeholder='Enter your password' />
						</label>
						<label className='form-label'>Confirm your password
							<input type='password' ref='signupPasswordConfirm' className='input-box' placeholder='Confirm your password' />
						</label>
						<label className='form-label'>Email
							<input type='email' ref='signupEmail' className='input-box' placeholder='Enter your email' />
						</label>
						<label className='form-label'>Phone number
							<input type='text' ref='signupPhone' className='input-box' placeholder='Enter your phone number' />
						</label>
						<label className='form-label'>Address
							<input type='text' ref='signupAddress' className='input-box' placeholder='3601 S Congress Ave, Austin, TX' />
						</label>
						<label className='form-label'>Zip Code
							<input type='text' ref='signupZip' className='input-box' placeholder='78704' />
						</label>
						<div className='error-msg' ref='error'></div>
						<button type='submit' ref='signupSubmit' className='submit-btn'>Submit</button>
					</form>
				</div>
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
			this.refs.error.getDOMNode().innerHTML = user.validationError;
		} else {
			// send data to the server
		}
	}
});

