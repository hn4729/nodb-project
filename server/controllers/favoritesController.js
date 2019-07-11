let favoritesData = require("../data/favoritesData");
let id = favoritesData.length;

module.exports = {
  read: (req, res) => {
    res.status(200).send(favoritesData);
  },

  add: (req, res) => {
    const { url, title, genre, description } = req.body;
    id++;
    favoritesData.push({ id, url, title, genre, description });
    res.status(200).send(favoritesData);
  },

  update: (req, res) => {
    const updateID = req.params.id;
    const { title, genre, description } = req.body;
    const favoriteIndex = favoritesData.findIndex(
      video => video.id == updateID
    );
    let video = favoritesData[favoriteIndex];

    favoritesData[favoriteIndex] = {
      id: video.id,
      title: title || video.title,
      genre: genre || video.genre,
      description: description || video.description
    };
    res.status(200).send(favoritesData);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    const favoriteIndex = favoritesData.findIndex(
      video => video.id == deleteID
    );
    favoritesData.splice(favoriteIndex, 1);
    res.status(200).send(favoritesData);
  }
};
