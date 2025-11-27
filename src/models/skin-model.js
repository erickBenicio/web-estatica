import { skinsJSON } from '../utils/utils.js';
const skins = skinsJSON('../../data/skins.json');

export class SkinModel {
    static async getAll({ tipo, cantidad, from }) {
        let result = skins;

        if (tipo) {
            result = result.filter(
                skin => skin.tipo.toLowerCase() === tipo.toLowerCase());
        }

        const fromNum = from ? Number(from) : 0;
        const cantNum = cantidad ? Number(cantidad) : result.length;
        return result.slice(fromNum, fromNum + cantNum);
    }

    static async getById(id) {
        const idNumeric = Number(id);
        const skin = skins.find(skin => skin.id === idNumeric);
        return skin;
    }

    static async createSkin(input) {
        const newId = skins.length > 0 ? skins[skins.length - 1].id + 1 : 1;
        const newSkin = { id: newId, ...input };
        skins.push(newSkin);
        return newSkin;
    }

    static async updateSkin({ id }, input) {
        const idNumeric = Number(id);
        const skinIndex = skins.findIndex(skin => skin.id === idNumeric);
        if (skinIndex === -1) {
            return false;
        }
        skins[skinIndex] = { id: idNumeric, ...input };
        return true
    }
}