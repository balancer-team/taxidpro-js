"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxIDPro = void 0;
const constants_1 = require("./constants");
class TaxIDPro {
    apiKey;
    constructor({ apiKey }) {
        if (typeof apiKey !== 'string') {
            throw new Error('apiKey must be a string');
        }
        this.apiKey = apiKey;
    }
    async validate({ country, tin, type = 'any' }) {
        const res = await fetch(`${constants_1.BASE_URL}${constants_1.VALIDATE_ENDPOINT}?country=${country}&tin=${tin}&type=${type}`, {
            headers: { Authorization: `Bearer ${this.apiKey}` },
        });
        if (!res.ok)
            throw new Error(`HTTP error! status: ${res.status} detail: ${await res.text()}`);
        const data = (await res.json());
        return data;
    }
    async lookup({ country, tin, type = 'vat' }) {
        if (type !== 'vat')
            throw new Error('lookup type must be vat');
        const res = await fetch(`${constants_1.BASE_URL}${constants_1.LOOKUP_ENDPOINT}?country=${country}&tin=${tin}&type=${type}`, {
            headers: { Authorization: `Bearer ${this.apiKey}` },
        });
        if (!res.ok)
            throw new Error(`HTTP error! status: ${res.status} detail: ${await res.text()}`);
        const data = (await res.json());
        return data;
    }
}
exports.TaxIDPro = TaxIDPro;
