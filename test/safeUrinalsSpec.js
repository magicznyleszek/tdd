describe('SafeUrinals', () => {
    const mySafeUrinals = new window.SafeUrinals();
    const DOOR_ID = mySafeUrinals.DOOR_ID;

    it('should disallow not arrays', () => {
        expect(() => {mySafeUrinals.find();}).toThrow();
        expect(() => {mySafeUrinals.find('hi am I ok?');}).toThrow();
        expect(() => {mySafeUrinals.find({});}).toThrow();
    });

    it('should allow 0s, 1s and door', () => {
        expect(() => {mySafeUrinals.find(['man', null, 'window']);}).toThrow();
        expect(() => {mySafeUrinals.find([0, 1, DOOR_ID]);}).not.toThrow();
    });

    it('should allow one door on start or end', () => {
        expect(() => {mySafeUrinals.find([0, DOOR_ID, 0]);}).toThrow();
        expect(() => {mySafeUrinals.find([0, DOOR_ID]);}).not.toThrow();
        expect(() => {mySafeUrinals.find([0, DOOR_ID, 0]);}).toThrow();
        expect(() => {mySafeUrinals.find([DOOR_ID, 0]);}).not.toThrow();
        expect(() => {mySafeUrinals.find([DOOR_ID, 0, DOOR_ID]);}).toThrow();
    });

    it('should return null if all spots taken', () => {
        expect(mySafeUrinals.find([DOOR_ID, 1, 1])).toBe(null);
    });

    it('should return index of empty slot if only one possible', () => {
        expect(mySafeUrinals.find([DOOR_ID, 1, 1, 1, 0, 1])).toBe(4);
        expect(mySafeUrinals.find([DOOR_ID, 0, 1, 1, 1, 1])).toBe(1);
        expect(mySafeUrinals.find([0, 1, 1, 1, 1, DOOR_ID])).toBe(0);
    });

    it('should prefer furthest free spot', () => {
        expect(mySafeUrinals.find([DOOR_ID, 1, 0, 1, 1, 1, 0, 1])).toBe(6);
    });

    it('should prefer intimate spot over furthest', () => {
        expect(mySafeUrinals.find([DOOR_ID, 0, 0, 1, 1, 1, 1, 0])).toBe(1);
    });
});
