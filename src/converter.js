
module.exports = class Converter {
    constructor(fileContent) {
        this._fileContent = JSON.parse(fileContent);
        this._literalArray = [];
        this.findAllLiterals();

    }
    findAllLiterals() {
        this._fileContent["literals"].forEach(literal => {
            this._literalArray.push(`"${literal.literal}"`);
        })
    }

    convertToLiterals() {
        return this._literalArray.join(" | ");
    }

}
