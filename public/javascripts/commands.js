function Command(name, payload) {
	this.name = name;
	this.payload = payload;
}

Command.prototype.send = function(command, next) {
	$.ajax({
		type: 'POST',
        url: '/commands',
        contentType: 'application/json',
    	dataType: 'json',
    	data : JSON.stringify({
    		type: this.name,
    		payload: this.payload
    	}), 
		success: next
	});
}

var CommandHandler = {
	createUser: function(payload) {
		return new Command('createUser', payload);
	}
}