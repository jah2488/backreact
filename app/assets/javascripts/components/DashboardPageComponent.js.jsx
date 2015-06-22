var Dashboard = React.createClass({
	render: function() {
		return (
			<div className="dashboard-page">


				<button className="logout-btn" onClick={this.logOut}>
                   <strong>Log Out</strong>
                </button>


	  			<img className='welcome-image' src="assets/home-page-visual.png" alt="Iron Rides Carpool"/>

	  			<h2>Start a conversation with your classmates!</h2>


				<div className='post-box'>

					<label className='form-label' ref='post'></label><br/>
					<input type='text' ref='post' className='input-box' placeholder='Type your post here' /><br/>

	  				<button className="submit-btn" onClick={this.findClassmate}>
	  					<strong>Submit</strong>
	  				</button>
	  			</div>

				<footer>
					Created by Gracie, Maryna and Carissa
				</footer>
			</div>
		);
	}
});

