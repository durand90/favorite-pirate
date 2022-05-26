const PirateController = require('../controllers/pirate.controllers');


module.exports = app => {
    app.get('/api/pirates', PirateController.findAll);
    app.post('/api/pirates', PirateController.createPirate);
    app.get('/api/pirates/:id', PirateController.findOnePirate);
    app.put('/api/pirates/:id', PirateController.updateExistingPirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}