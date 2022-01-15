import fs from 'fs'

class JSONReader {

    #configFileName

    constructor(configFileName) {
        this.#configFileName = configFileName
    }

    getConfigJSON() {
        return JSON.parse(fs.readFileSync(this.#configFileName))
    }
}

export default JSONReader