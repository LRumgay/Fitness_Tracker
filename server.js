const express = require("express")
const mongoose = request("mongoose")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
// dont forget require for workout stats //

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});