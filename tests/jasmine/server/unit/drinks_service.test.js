describe('DrinksService', function () {
    'use strict';

    beforeEach(function () {
        MeteorStubs.install();
        mock(global, 'Drinks');
    });

    afterEach(function () {
        MeteorStubs.uninstall();
    });

    describe('#getDrinkList', function () {
        it('should ask for the drinks sorted by likes then name and return them', function () {
            var result = {};
            spyOn(Drinks, 'find').and.returnValue(result);

            expect(DrinksService.getDrinkList()).toBe(result);
            expect(Drinks.find.calls.argsFor(0)).toEqual([
                {},
                {sort: {likes: -1, name: 1}}
            ]);
        });
    });

    describe('#likeDrink', function () {
        it('should add a like to the drink', function () {
            spyOn(Drinks, 'update');

            DrinksService.likeDrink(1);

            expect(Drinks.update.calls.argsFor(0)).toEqual([
                1,
                { $inc: { likes: 1 } }
            ]);
        });
    });

});