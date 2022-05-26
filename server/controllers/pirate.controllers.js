const Pirate = require('../models/pirate.models');

module.exports.findAll = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.status(400).json(err));
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => {
            console.log('DB SUCCESS!!!')
            res.json(newPirate)})
        .catch(err => {
            console.log('DB ERROR!!!')
            res.status(400).json(err)});
}


module.exports.findOnePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(onePirate => res.json(onePirate))
        .catch(err => res.status(400).json(err));
}


module.exports.updateExistingPirate = (req, res) => {
    Pirate.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPirate => {
            console.log('DB SUCCESS!!!')
            res.json(updatedPirate)})
        .catch(err => {
            console.log('DB ERROR!!!')
            res.status(400).json(err)});
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json('Something went wrong',err));
}