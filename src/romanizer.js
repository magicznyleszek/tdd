class Romanizer {
    constructor() {
        this._symbols = this._prepareSymbols();
        this.REPEATABLE_LIMIT = 3;
        this.ERRORS = new Map();
        this.ERRORS.set('notNumber', 'Expected a number');
        this.ERRORS.set('notPositive', 'Expected a positive number');
    }

    convert(int) {
        if (!Number.isInteger(int)) {
            throw new Error(this.ERRORS.get('notNumber'));
        } else if (int < 1) {
            throw new Error(this.ERRORS.get('notPositive'));
        }

        // for simple symbols just return the representation
        const simpleSymbol = this._symbols.get(int);
        if (typeof simpleSymbol !== 'undefined') {
            return simpleSymbol.char;
        }

        // for multiple values of repeatable symbols (up to limit)
        // return a repeated symbol
        const simpleSymbolRepeated = this._getRepeatedSimpleSymbol(int);
        if (simpleSymbolRepeated !== null) {
            return simpleSymbolRepeated;
        }

        return '';
    }

    _getRepeatedSimpleSymbol(number) {
        
    }

    _isMultiplicityOfSimpleSymbol(number, count) {
        const expectedNumber = number / count;
        const simpleSymbol = this._symbols.get(expectedNumber);
        if (typeof simpleSymbol !== 'undefined') {
            return simpleSymbol.isRepeatable;
        }
        return false;
    }

    _repeatChar(character, count) {
        let final = '';
        for (let i = 0; i < count; i += 1) {
            final += character;
        }
        return final;
    }

    _prepareSymbols() {
        const symbolsMap = new Map();
        symbolsMap.set(1, {char: 'I', isRepeatable: true});
        symbolsMap.set(5, {char: 'V', isRepeatable: false});
        symbolsMap.set(10, {char: 'X', isRepeatable: true});
        symbolsMap.set(50, {char: 'L', isRepeatable: false});
        symbolsMap.set(100, {char: 'C', isRepeatable: true});
        return symbolsMap;
    }
}

window.Romanizer = Romanizer;
