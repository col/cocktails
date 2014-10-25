Drinks = new Meteor.Collection("drinks");

DrinksService = {
    getDrinkList: function () {
        return Drinks.find({}, {sort: {likes: -1, name: 1}});
    },
    likeDrink: function (id) {
        return Drinks.update(id, {$inc: { likes: 1 }});
    }
};