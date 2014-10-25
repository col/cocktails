Template.drink_list.drinks = function() {
    return DrinksService.getDrinkList();
};

Template.drink_list.events({
    'click button': function () {
        DrinksService.likeDrink(this._id);
    }
});
