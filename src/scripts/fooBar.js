class FooBarService {
    constructor($timeout) {
        this._$timeout = $timeout;
        this.list = new Set();
    }

    sayHiLazily(username) {
        this._$timeout(
            this.sayHi.bind(this, username),
            FooBarService.LAZY_DELAY
        );
    }

    sayHi(username) {
        let finalMessage = '';

        finalMessage += FooBarService.HI_PREFIX;
        finalMessage += username;
        finalMessage += FooBarService.HI_SUFFIX;
        this.list.add(finalMessage);
        console.log(finalMessage);
        return finalMessage;
    }
}

FooBarService.$inject = ['$timeout'];
FooBarService.LAZY_DELAY = 500;
FooBarService.HI_PREFIX = 'Hello, ';
FooBarService.HI_SUFFIX = '!';

angular.module('gogModuleBoilerplate').service(
    'boilerplateFooBar',
    FooBarService
);
