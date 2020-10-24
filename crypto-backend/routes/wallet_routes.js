module.exports = app => {
    const wallet = require("../controllers/wallet_controller.js");

    var router = require("express").Router();

    // Create a new wallet
    router.post("/", wallet.create);

    // Retrieve all wallet
    router.get("/", wallet.findAll);

    // Retrieve a single wallet with id
    router.get("/:id", wallet.findOne);

    // Update a wallet with id
    router.put("/:id", wallet.update);

    // Delete a wallet with id
    router.delete("/:id", wallet.delete);

    // Delete all wallet
    router.delete("/", wallet.deleteAll);

    app.use('/api/wallet', router);
};