var Login = React.createClass({
	render: function() {
		return (

			<div className="login-page">
				<div className="logo"alt="Iron Rides logo">
				</div>

				<form className="login-form" onSumbit={this.submitLogin}>
          			<label className="form-label"> Username 
          				<input type="text" ref="username" className="input-box" placeholder="Enter your username"/>
          			</label>
            		
            		<label className="password"> Password 
            			<input type="password" ref="password" className="input-box" placeholder="Enter your password"/>
            		</label>
            	</form>

            	<button name="login-btn">
  					<strong>Log In</strong>
  				</button>

				<button name="sign-up-btn">
  					<strong>Sign up</strong>
  				</button>

				<div className="error-msg">
				</div>

			</div>

		)
	}	
});