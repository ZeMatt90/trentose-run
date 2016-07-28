describe("App", function() {
    
    beforeEach(function() {
        Coach._reset();
     });
    
    it('should not track an activity', function() {
        var value = Coach.track("walk",10);
        expect(value).toBeNull();
    });
    
    it('should not start a non-existing program', function() {
        var value = Coach.start('fake');
        expect(value).toBeFalsy();
    });
    
    it('should start an existing program', function() {
        var value = Coach.start('crazy');
        expect(value).toBeTruthy();
    });

    it('should not track an activity', function() {
        Coach.start('crazy');
        var value = Coach.track("fake",10);
        expect(value).toBeNull();
    });
    
    it('should track an activity', function() {
        Coach.start('crazy');
        var value = Coach.track("walk",10);
        expect(value).toBe(500);
    });
    
    it("should..", function() { 
        Coach.start("normal");
        Coach.track("run",0);
      
        expect(Coach.checkProgress()).toBe(0);
    });
    
});