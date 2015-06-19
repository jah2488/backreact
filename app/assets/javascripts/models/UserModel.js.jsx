var User = Backbone.Model.extend({
	defaults: {
		id: null,
		name: null,
		password: null,
		password_confirmation: null,
		email: null,
		phone: null,
		zip_code: null,
		address: null
	},
	validate: function (attr) {
		if(!attr.username) {
			return 'Please enter your username';
		} else if(!attr.password) {
			return 'Please enter your password';
		} else if(!attr.email) {
			return 'Please enter your email';
		} else if(!attr.phone) {
			return 'Please enter your phone number';
		}
	}
})