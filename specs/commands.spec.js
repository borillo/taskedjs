describe('Commands', function () {

	var createUserCommand;

	beforeEach(function() {
		this.addMatchers({
		    toBeInstanceOf: function(expectedInstance) {
		    	var actual = this.actual;
		    	var notText = this.isNot ? " not" : "";
		    	this.message = function() {
		    		return "Expected " + actual.constructor.name + notText + " is instance of " + expectedInstance.name;
		    	};
		    	return actual instanceof expectedInstance;
		    }				    
		});

		createUserCommand = CommandHandler.createUser({ 
			name: 'test'
		});
	});

	it('should be created as an instance of Command', function() {
		expect(createUserCommand).toBeInstanceOf(Command);
	});

	it('should be created with the method name', function() {
		expect(createUserCommand.name).toBe('createUser');
	});

	it('should be created with provided payload', function() {
		expect(createUserCommand.payload.name).toBe('test');
	});	
});