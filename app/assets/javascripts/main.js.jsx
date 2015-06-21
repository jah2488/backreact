/* global Backbone React */
var App = Backbone.Router.extend({
	routes: {
		'': 'gotoWelcome',
		'login': 'gotoLogin',
		'signup': 'gotoSignin',
		'posts': 'gotoDashboard',
		'search/zip_code/': 'gotoFind'
	},
	gotoWelcome: function() {
		React.render(<Welcome />, document.getElementById('container'));
	},
	gotoLogin: function() {
		React.render(<Login />, document.getElementById('container'));
	},
	gotoSignin: function() {
		React.render(<Signup />, document.getElementById('container'));
	},
	gotoDashboard: function() {
		React.render(<Dashboard />, document.getElementById('container'));
	},
	gotoFind: function() {
		React.render(<FindCar />, document.getElementById('container'));
	}
});

var app = new App();
Backbone.history.start();
