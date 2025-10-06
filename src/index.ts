import { ENV } from "./config/environment";
import app from "./server";

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
