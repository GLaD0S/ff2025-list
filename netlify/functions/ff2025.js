FF2025_LIST = [
    "Reflection in a Dead Diamond",
    "Ikarat Darah",
    "Bulk",
    "Secret 2: Bugonia",
    "The Evil that Binds Us",
    "Disforia",
    "Tie Man",
    "Night Patrol",
    "Road to Vendetta",
    "Whistle",
]

exports.handler = async (event, context) => {
  try {
    const { password } = JSON.parse(event.body); // Example: getting data from request body
    if(password && password == "reflection-in-a-dead-diamond") {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([
                "test",
                "test1",
            ]),
        };
    }
    else {
        return {
            statusCode: 401,
            headers: { "Content-Type": "application/json" },
            body: "Unauthorized"
        };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};