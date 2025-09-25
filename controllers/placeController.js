const Place = require('../models/Place');

class PlaceController {
  static async all(req, res) {
    try {
      const places = await Place.find();
      res.json(places);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async findById(req, res) {
    try {
      const place = await Place.findById(req.params.id);
      if (!place) return res.status(404).json({ message: 'Lugar no encontrado' });
      res.json(place);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async post(req, res) {
    const place = new Place(req.body);
    try {
      const newPlace = await place.save();
      res.status(201).json(newPlace);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async put(req, res) {
    try {
      const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPlace) return res.status(404).json({ message: 'Lugar no encontrado' });
      res.json(updatedPlace);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const deletedPlace = await Place.findByIdAndDelete(req.params.id);
      if (!deletedPlace) return res.status(404).json({ message: 'Lugar no encontrado' });
      res.json({ message: 'Lugar eliminado correctamente' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = PlaceController;
