var apiai = require('botkit-middleware-apiai')({
    token: process.env.apiai,
    skip_bot: false
});

module.exports = function(controller) {
  // Add API.ai middleware in between your bot and messages received
  controller.middleware.receive.use(apiai.receive);

  controller.hears(['Example Intent'], 'message_received', apiai.hears, function(bot, message) {
    // Add a response to an intent called "Example Intent" here
  });

  controller.hears(['Default Fallback Intent'], 'message_received', apiai.hears, function(bot, message) {
    // Add your default behavior for unrecognized intents here
  });
}
