const express = require("express");
const fc = require("./controllers/favoritesController");
const wc = require("./controllers/watchLaterController");

const app = express();

app.use(express.json());

app.get("/api/favorites", fc.read);
app.post("/api/favorites", fc.add);
app.put("/api/favorites/:id", fc.update);
app.delete("/api/favorites/:id", fc.delete);

app.get("/api/watchLater", wc.read);
app.post("/api/watchLater", wc.add);
app.put("/api/watchLater/:id", wc.update);
app.delete("/api/watchLater/:id", wc.delete);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
