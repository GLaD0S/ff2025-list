// netlify/functions/my-api-endpoint.js
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify([
        "test",
        "test1",
      ]),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};