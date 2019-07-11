let watchLaterData = require("../data/watchLaterData");
let id = watchLaterData.length;

module.exports = {
  read: (req, res) => {
    res.status(200).send(watchLaterData);
  },

  add: (req, res) => {
    const { url, title, genre, description } = req.body;
    id++;
    watchLaterData.push({ id, url, title, genre, description });
    res.status(200).send(watchLaterData);
  },

  update: (req, res) => {
    const updateID = req.params.id;
    const { title, genre, description } = req.body;
    const favoriteIndex = watchLaterData.findIndex(
      video => video.id == updateID
    );
    let video = watchLaterData[favoriteIndex];

    watchLaterData[favoriteIndex] = {
      id: video.id,
      title: title || video.title,
      genre: genre || video.genre,
      description: description || video.description
    };
    res.status(200).send(watchLaterData);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    const favoriteIndex = watchLaterData.findIndex(
      video => video.id == deleteID
    );
    watchLaterData.splice(favoriteIndex, 1);
    res.status(200).send(watchLaterData);
  }
};
