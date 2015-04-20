if (Meteor.isClient) {
  Restaurants = new Meteor.Collection;

  Meteor.startup(function() {
    Restaurants.insert({name: "Chinese", likes: 40, phone: "+015555555"});
    Restaurants.insert({name: "Thai", likes: 20, phone: "+015555555"});
    Restaurants.insert({name: "Japanese", likes: 430, phone: "+015555555"});
    Restaurants.insert({name: "Indonesian", likes: 50, phone: "+015555555"});
    Restaurants.insert({name: "Italian", likes: 70, phone: "+015555555"});

  });
}
