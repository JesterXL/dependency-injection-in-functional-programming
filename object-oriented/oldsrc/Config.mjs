import JSONReader from './JSONReader.mjs'

class Config {
    
    getServerURL() {
        let environment = this.#getEnvironment()
        let url = this.#getURLFromEnvironment(environment)
        return url
    }

    #getEnvironment() {
        return new JSONReader('config.json')
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