describe('fooBar', () => {
    let mockBoilerplateFooBar = null;

    beforeEach(() => {
        module('testApp');
        inject(($injector) => {
            mockBoilerplateFooBar = $injector.get('boilerplateFooBar');
        });
    });

    it('should be able to say hi', () => {
        const greeting = mockBoilerplateFooBar.sayHi('Foo');

        expect(greeting).toEqual('Hello, Foo!');
    });
});
