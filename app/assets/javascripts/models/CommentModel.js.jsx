var Comment = Backbone.Model.extend({
	defaults: {
		id: null,
		user_id: null,
		post_id:null,
		msg: null,
		createdAt: null 
	},
	validate: function(attr) {
		if(!attr.msg) {
			return 'Please enter your message';
		} 
		return false;
	}
})