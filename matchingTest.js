describe('getDayIndex', function () {
    it('should show you an number between 0-6 representing the days of the week', function () {
        let matchInst = dayMatch()

        assert.equal(matchInst.getDayIndex("27 june 2021"), "0");
    });
    it('should show you an number between 0-6 representing the days of the week', function () {
        let matchInst = dayMatch()
        assert.equal(matchInst.getDayIndex("12 June 2021"), "6");
    });
    it('should show you an number between 0-6 representing the days of the week', function () {
        let matchInst = dayMatch();
        assert.equal(matchInst.getDayIndex("08 june 2021"), "2");
    });
});


describe('getDay1', function () {
    it('should show you the day of the week on that is on that date', function () {
        let matchInst = dayMatch()

        assert.equal(matchInst.getDay1("27 june 2021"), "Sunday");
    }); it('should show you the day of the week on that is on that date', function () {
        let matchInst = dayMatch()

        assert.equal(matchInst.getDay1("12 June 2021"), "Saturday");
    });
    it('should show you the day of the week on that is on that date', function () {
        let matchInst = dayMatch()

        assert.equal(matchInst.getDay1("12 June 2021"), "Saturday");
    });

});
describe('getColor', function () {
    it('should show you the day of the week on that is on that date', function () {
        let matchInst = dayMatch()

        assert.equal(matchInst.getColor("27 june 2021", "28 june 2011"), "blue");
    }); it('should show you the day of the week on that is on that date', function () {
        let matchInst = dayMatch()

        assert.equal(matchInst.getColor("12 June 2021", "19 june 2021"), "green");
    });


});