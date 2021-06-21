import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import courseRoute from "./routes/course.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use("/posts", postRoutes);
app.use("/course", courseRoute);

// const CONNECTION_URL =
  // "mongodb+srv://amit:amit1234@cluster0.ezjz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const CONNECTION_URL="mongodb+srv://amit:amit1234@cluster0.adhxv.mongodb.net/notesapp?retryWrites=true&w=majority";
  const PORT = process.env.PORT || 2973;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
