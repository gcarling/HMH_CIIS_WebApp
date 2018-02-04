import * as errorHandler from "errorhandler";

const app = require("./app");

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(8080, () => {
  console.log(("App is running at http://localhost:8080 in %s mode"), app.get("env"));
  console.log("Press CTRL-C to stop\n");
});

export = server;
