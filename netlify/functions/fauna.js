import faunadb from "faunadb";

/* configure faunaDB Client with our secret */
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  var createP = client.query(
    q.Create(q.Collection("Test"), { data: { testField: "testValue" } })
  );

  createP.then(function (response) {
    console.log(response.ref); // Logs the ref to the console.
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Fauuuuna" }),
  };
};
