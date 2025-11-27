import { skinsJSON } from '../utils/utils.js';
const skins = skinsJSON('../../data/skins.json');

export class SkinModel {
    static async getAll({ tipo }) {
        if (tipo) {
            return skins.filter(
                skin => skin.tipo.toLowerCase() === tipo.toLowerCase());
        }
        return skins
    }

    static async getById(id) {
        const skin = skins.find(skin => skin.id === id);
        return skin;
    }

    static async createSkin() {

    }

    static async updateSkin({ id }) {

    }
}