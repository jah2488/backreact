var Login = React.createClass({
	render: function() {

		return (

			<div className="login-page">
				<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>
				<h2>Log in or sign up to start riding with your classmates!</h2>
		
				<form className="login-form" onSumbit={this.submitLogin}>
					<label className="form-label"> Username &nbsp;
						<input type="text" ref="username" className="input-box" placeholder="Enter your username"/>
					</label>
					<br/>
					<label className="password">Password  &nbsp;&nbsp;
						<input type="password" ref="password" className="input-box" placeholder="Enter your password"/>
					</label> 
					<br/>

					<button className="login-btn">
						 <strong>Log In</strong>
					</button>
					<br/>

					<button className="join-btn">
						<strong>Sign up</strong>
					</button>

					<div className="error-msg"></div>
				</form>
				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		)
	}	
});
