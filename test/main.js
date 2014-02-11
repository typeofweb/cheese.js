describe('simple test', function () {
    it('should work', function () {
        expect(1).toEqual(1);
        expect({}).not.toBe({});
        expect({}).toEqual({});
    })
});