import { SkinModel }   from '../models/skin-model.js';

export class SkinController {
  static async getAll (req, res) {
    const { tipo, cantidad, from } = req.query;
    const skins = await SkinModel.getAll({ tipo, cantidad, from });
    res.status(200).json(skins);
  }

  static async getSkinById (req, res) {
    const { id } = req.params;
    const skin = await SkinModel.getById(id);
    if (!skin) {
      return res.status(404).send('Skin no encontrada');
    }
    res.status(200).json(skin);
  }

  static async createSkin (req, res) {
    const nuevaSkin = await SkinModel.createSkin(req.body);
    return res.status(201).json(nuevaSkin);
  }

  static async updateSkin (req, res) {
    const { id } = req.params;
    const { titulo, modelo, imagen, precio, detalle, rareza, slug, tipo, coleccion} = req.params;
    const updatedSkin = await SkinModel.updateSkin({ id, titulo, modelo, imagen, precio, detalle, rareza, slug, tipo, coleccion});
    if (!updatedSkin) {
      return res.status(404).send('Skin no encontrada');
    }
    res.json(updatedSkin);
  }

  static async deleteSkin (req, res) {
    const { id } = req.params;
    const deleted = await SkinModel.deleteSkin(id);
    if (!deleted) {
      return res.status(404).send('Skin no encontrada');
    }
    res.status(204).send();
  }
}


