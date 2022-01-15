class Config {

    #JSONReader

    constructor(JSONReader) {
        this.#JSONReader = JSONReader
    }

    getServerURL() {
        let environment = this.#getEnvironment()
        let url = this.#getURLFromEnvironment(environment)
        return url
    }

    #getEnvironment() {
        return this.#JSONReader
            .getConfigJSON()
            .env
    }

    #getURLFromEnvironment(environment) {
        if(environment === 'production') {
            return 'http://server.com'
        } else {
            return 'http://localhost:8000'
        }
    }
}

export default Config