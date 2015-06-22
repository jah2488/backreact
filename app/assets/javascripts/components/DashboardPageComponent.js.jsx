var Dashboard = React.createClass({
	render: function() {
		return (
			<div className="dashboard-page">


				<button className="logout-btn" onClick={this.logOut}>
                   <strong>Log Out</strong>
                </button>


	  			<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>

	  			<h2>Start the carpool conversation!</h2>

	  			<form className='dashboard-form'>

					<label className='form-label' ref='Comments'>Start conversations with your classmates on the message board!</label>
					<input type='text' ref='commentsbox' className='input-box' placeholder='comments' />

	  				<button className="submit-btn" onClick={this.findClassmate}>
	  					<strong>Submit</strong>
	  				</button>
	  			</form>

	  			
				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		);
	}
});

