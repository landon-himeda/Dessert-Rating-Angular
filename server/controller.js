const Models = require("./models");

module.exports = {
    readCakes: (request, response) => {
        Models.Cake.find().sort({'createdAt': -1})
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    readOneCake: (request, response) => {
        Models.Cake.findById(request.params.id)
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    createCake: (request, response) => {
        Models.Cake.create(request.body)
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    updateCake: (request, response) => {
        Models.Cake.findByIdAndUpdate(request.params.id, request.body, {runValidators: true})
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    deleteCake: (request, response) => {
        Models.Cake.findByIdAndRemove(request.params.id)
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    readRatings: (request, response) => {
        Models.Cake.findById(request.params.cakeId)
            .then((result) => {
                response.json({message: "Success", data: result.ratings});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    readOneRating: (request, response) => {
        Models.Cake.findById(request.params.cakeId)
            .then((result) => {
                var targetRating = result.ratings.id(request.params.ratingId);
                response.json({message: "Success", data: targetRating});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    createRating: (request, response) => {
        Models.Cake.findById(request.params.cakeId)
            .then((result) => {
                result.ratings.push(request.body);
                result.save()
                    .then((saveResult) => {
                        response.json({message: "Success", data: saveResult});
                    })
                    .catch((err) => {
                        console.log(err);
                        response.json({message: "Error", error: err});
                    });
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    // updateRating: (request, response) => {
    //     Models.Cake.findById(request.params.cakeId)
    //         .then((result) => {
    //             var targetRating = result.ratings.id(request.params.ratingId);
    //             targetRating = request.body;
    //             result.save()
    //                 .then((saveResult) => {
    //                     response.json({message: "Success", data: saveResult});
    //                 })
    //                 .catch((err) => {
    //                     console.log(err);
    //                     response.json({message: "Error", error: err});
    //                 });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             response.json({message: "Error", error: err});
    //         });
    // },

    deleteRating: (request, response) => {
        Models.Cake.findById(request.params.cakeId)
            .then((result) => {
                result.ratings.id(request.params.ratingId).remove();
                result.save()
                    .then((saveResult) => {
                        response.json({message: "Success", data: saveResult});
                    })
                    .catch((err) => {
                        console.log(err);
                        response.json({message: "Error", error: err});
                    });
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },
}