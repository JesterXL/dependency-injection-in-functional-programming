class JSONReader {
    
    #FileReader
    #configFileName

    constructor(FileReader, configFileName) {
        this.#FileReader = FileReader
        this.#configFileName = configFileName
    }

    getConfigJSON() {
        return JSON.parse(this.#FileReader.readFileSync(this.#configFileName))
    }
}

export default JSONReader