var User = Backbone.Model.extend({
	defaults: {
		id: null,
		username: null,
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
		} else if(!validator.isLength((attr.password), 6)) {
			return 'Your password should be at least 6 characters';
		} else if(!attr.password_confirmation) {
			return 'Please enter your password';
		} else if (!validator.isLength((attr.password_confirmation), 6)) {
			return 'Your password should be at least 6 characters';
		} else if(!attr.email) {
			return 'Please enter your email';
		} else if (!validator.isEmail(attr.email)) {
			return 'Your email address should contain @'
		} else if(!attr.phone) {
			return 'Please enter your phone number';
		} else if(!validator.isNumeric(attr.phone)) {
			return 'Your phone number should only contain numbers';
		} else if(!attr.zip_code) {
			return 'Please enter your ZIP Code';
		} else if(!validator.isNumeric(attr.zip_code)) {
			return 'Your ZIP Code should only contain numbers';
		} else if(!validator.isLength((attr.zip_code), 5)) {
			return 'ZIP Code should be 5 characters long';
		} else { return false; }
	}
})