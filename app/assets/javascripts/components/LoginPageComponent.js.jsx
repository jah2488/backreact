var Login = React.createClass({
	render: function() {

		return (

			<div className="login-page">
				<img className='welcome-image' src="/assets/home-page-visual.png" alt="Iron Rides Carpool"/>
		
				<form className="login-form" onSumbit={this.submitLogin}>
					<label className="form-label"> Username 
						<input type="text" ref="username" className="input-box" placeholder="Enter your username"/>
					</label>
					
					<label className="password">password
						<input type="password" ref="password" className="input-box" placeholder="Enter your password"/>
					</label>

					<button className="login-btn">
						 <strong>Log In</strong>
					</button>

					<button className="sign-up-btn">
						<strong>Sign up</strong>
					</button>

					<div className="error-msg"></div>
				</form>
				<footer>
					<p>Created by Gracie, Maryna and Carissa</p>
				</footer>
			</div>
		)
	}	
});
