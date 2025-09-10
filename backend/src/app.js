const express = require("express");
const mongoose = require("mongoose");
const loginRoutes = require("../.bin/login.js (route folder)");
const optionRoutes = require("./routes/options");
const dataEntryRoutes = require("./routes/dataEntry");
const userQueryRoutes = require("./routes/userQuery");
const { initEmbedder } = require("./utils/vectorUtils");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect("mongodb://localhost:27017/yourdbname", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const init = async () => {
  await initEmbedder();
};
init().catch((err) => console.error("Initialization error:", err));
// app.use("/api/login", loginRoutes);
app.use("/api/options", optionRoutes);
app.use("/api/data", dataEntryRoutes);
app.use("/api/query", userQueryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
