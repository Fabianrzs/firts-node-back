import app from "./app.js";
import config from "./config/config";

app.listen(config.PORT, () => {
  console.log(
    config.APPLICATION_NAME +
      " API SE ESTÁ EJECUTANDO EN EL PUERTO " +
      config.PORT
  );
});
