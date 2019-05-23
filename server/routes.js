const controller = require("./controller")

module.exports = function(app){
    app.get('/cakes/:cakeId/ratings', controller.readRatings);
    app.get('/cakes/:cakeId/ratings/:ratingId', controller.readOneRating);
    app.post('/cakes/:cakeId/ratings', controller.createRating);
    // app.put('/cakes/:cakeId/ratings/:ratingId', controller.updateRating);
    app.delete('/cakes/:cakeId/ratings/:ratingId/', controller.deleteRating);
    app.get('/cakes', controller.readCakes);
    app.get('/cakes/:id', controller.readOneCake);
    app.post('/cakes', controller.createCake);
    app.put('/cakes/:id', controller.updateCake);
    app.delete('/cakes/:id', controller.deleteCake);
}