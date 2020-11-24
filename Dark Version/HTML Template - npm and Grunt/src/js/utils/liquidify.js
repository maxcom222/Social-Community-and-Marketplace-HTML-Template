const app = require('../utils/core');

app.querySelector('.liquid', function (images) {
  for (const image of images) {
    app.liquidify(image);
  }
});