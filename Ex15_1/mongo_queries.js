// 1. Crud
// 1.1 – Write a MongoDb query to display all the documents in
// the restaurant collection.
db.getCollection("restaurants").find({});
// 1.2 - Write a MongoDb query to display all restaurants that
// have a specific cuisine
db.getCollection("restaurants").find({ cuisine: "asian" });
// 1.3 - Write a MongoDb query that displays only kosher
// restaurants
db.getCollection("restaurants").find({ kosher: true });
// 1.4 - Write a MongoDb query that displays only a specific cities
// restaurants
db.getCollection("restaurants").find({ "address.city": "Holon" });
// 1.5 - Write a MongoDb query to display a specific restaurants
// address
db.getCollection("restaurants").find(
  { name: "coconut jam" },
  { name: 1, address: 1 }
);
// 1.6 - Write a MongoDb query to display a specific restaurants
// coordinates
db.getCollection("restaurants").find(
  { name: "coconut jam" },
  { name: 1, "address.coordinates": 1 }
);
// 1.7. - Write a MongoDb query that should display all
// restaurants in ascending order by restaurant name.
db.getCollection("restaurants").find().sort({ name: 1 });

// 1.8 - Write a MongoDb query that should display all restaurants
// in ascending order by city names.
db.getCollection("restaurants").find().sort({ "address.city": 1 });
// 1.9 - Update a specific restaurant's name
db.getCollection("restaurants").update(
  { name: "coconut jam" },
  { $set: { name: "strawberry jam" } }
);
// 1.10 - Update a specific restaurant by adding a new review.
db.getCollection("restaurants").update(
  { name: "strawberry jam" },
  {
    $set: {
      "reviews.3": {
        date: ISODate("2016-12-12T00:00:00.000Z"),
        score: 5.0,
      },
    },
  }
);
// 1.11 - Update all restaurants to be kosher
db.getCollection("restaurants").updateMany({}, { $set: { kosher: true } });
// 1.14 – Increment a specific restaurants score by 2
db.getCollection("restaurants").update(
  { name: "strawberry jam" },
  { $inc: { "reviews.$[element].score": 2 } },
  {
    multi: true,
    arrayFilters: [{ element: { } }],
  }
);
// 1.15 – Decrement a specific restaurants score by 1
db.getCollection("restaurants").update(
  { name: "strawberry jam" },
  { $inc: { "reviews.[score]": -1 } },
  {
    multi: true,
    arrayFilters: [{ element: {} }],
  }
);
// 1.12 - Delete a specific restaurant
db.getCollection("restaurants").remove({name: "strawberry jam"})

// 1.13 - Delete all restaurants
db.getCollection("restaurants").drop()

// section 2 - ForEach Queries
// 2.2 - Write a MongoDb query to print all restaurant cities
db.getCollection("restaurants")
  .find()
  .forEach(function (rest) {
    print(rest.address.city);
  });


// 2.3 - Write a MongoDb query to print all restaurant coordinates
db.getCollection("restaurants")
  .find()
  .forEach(function (rest) {
    print(rest.address.coordinates);
  });

// 3. Advanced Queries
// 3.1 - Query for restaurant names that start with a specific
// alphabet
db.getCollection("restaurants").find({
  name: { $regex: /^s/ },
});


// 3.2 - Query how many documents you have from the restaurant
// collection.
db.getCollection("restaurants").find().count();

// 3.3 - Write a MongoDb query to get restaurants that include
// reviews from a specific date.
db.getCollection("restaurants").find({
  "reviews.date": {
    $gte: ISODate("2020-01-01T00:00:00Z"),
    $lt: ISODate("2020-01-02T00:00:00Z"),
  },
});