import express from "express";
import bodyParser from "body-parser";
import customerRoutes from "./routes/customerRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/customer", customerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
