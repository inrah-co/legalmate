import express from "express";
import mongoose from "mongoose";
import loginRoutes from "./routes/login";
import settingsRoutes from "./routes/settings";
import dataEntryRoutes from "./routes/dataEntry";
import userQueryRoutes from "./routes/userQuery";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/express-mongo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/login", loginRoutes);
app.use("/settings", settingsRoutes);
app.use("/data-entry", dataEntryRoutes);
app.use("/user-query", userQueryRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
