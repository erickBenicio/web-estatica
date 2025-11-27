import { SkinModel }   from '../models/skin-model.js';

export class SkinController {
  static async getAll (req, res) {
    const { tipo } = req.query;
    const skins = await SkinModel.getAll({ tipo });
    if (!skins) {
      return res.status(404).send('No se encontraron skins');
    }
    res.json(skins);
  }

  static async getSkinById (req, res) {
    const { id } = req.params;
    const skin = await SkinModel.getById(id);
    if (!skin) {
      return res.status(404).send('Skin no encontrada');
    }
    res.json(skin);
  }

  static async createSkin (req, res) {
    
  }

  static async updateSkin (req, res) {

  }

  static async deleteSkin (req, res) {

  }
}


