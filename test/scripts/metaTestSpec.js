describe('environment', () => {
    it('should know what\'s false', () => {
        expect(true).not.toBe(false);
    });

    it('should know what\'s true', () => {
        expect(true).toBe(true);
    });
});
