describe('Romanizer', () => {
    const myRomanizer = new window.Romanizer();

    // it('should know simple roman digits', () => {
    //     expect(myRomanizer.convert(1)).toEqual('I');
    //     expect(myRomanizer.convert(5)).toEqual('V');
    //     expect(myRomanizer.convert(10)).toEqual('X');
    //     expect(myRomanizer.convert(50)).toEqual('L');
    //     expect(myRomanizer.convert(100)).toEqual('C');
    // });
    //
    // it('should repeat repeatable symbols up to three times', () => {
    //     expect(myRomanizer.convert(2)).toEqual('II');
    //     expect(myRomanizer.convert(3)).toEqual('III');
    //     expect(myRomanizer.convert(4)).not.toEqual('IIII');
    //     expect(myRomanizer.convert(10)).not.toEqual('VV');
    //     expect(myRomanizer.convert(20)).toEqual('XX');
    //     expect(myRomanizer.convert(30)).toEqual('XXX');
    //     expect(myRomanizer.convert(40)).not.toEqual('XXX');
    //     expect(myRomanizer.convert(100)).not.toEqual('LL');
    //     expect(myRomanizer.convert(200)).toEqual('CC');
    //     expect(myRomanizer.convert(300)).toEqual('CCC');
    // });
    //
    // it('should require a positive integer', () => {
    //     expect(() => {myRomanizer.convert('');}).toThrow();
    //     expect(() => {myRomanizer.convert(null);}).toThrow();
    //     expect(() => {myRomanizer.convert(-1);}).toThrow();
    //     expect(() => {myRomanizer.convert(1.1);}).toThrow();
    //     expect(() => {myRomanizer.convert();}).toThrow();
    //     expect(() => {myRomanizer.convert([]);}).toThrow();
    //     expect(() => {myRomanizer.convert({});}).toThrow();
    // });
});
