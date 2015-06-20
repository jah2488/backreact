var Login = React.createClass({
	render: function() {

		return (

			<div className="login-page">
				<img className="logo"src="images/iron-ride-logo.png" alt="Iron Rides logo">

		
				<form className="login-form" onSumbit={this.submitLogin}>
          			<label className="form-label"> Username 
          				<input type="text" ref="username" className="input-box" placeholder="Enter your username"/>
          			</label>
            		
            		<label className="password"> Password 
            			<input type="password" ref="password" className="input-box" placeholder="Enter your password"/>
            		</label>
        </form>

            	<button className="login-btn">
  					     <strong>Log In</strong>
  				    </button>

				      <button className="sign-up-btn">
  					     <strong>Sign up</strong>
  				    </button>

				<div className="error-msg">
				</div>

			</div>

		)
	}	
});
