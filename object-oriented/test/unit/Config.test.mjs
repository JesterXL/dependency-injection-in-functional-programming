import { expect } from 'chai'
import Config from '../../src/Config.mjs'

describe('Config.mjs', () => {

    it('should get a serverURL of localhost for QA', () => {
        class JSONReaderStub {
            getConfigJSON() {
                return { env: 'qa' }
            }
        }
        let jsonReaderStub = new JSONReaderStub()
        let config = new Config(jsonReaderStub)
        let url = config.getServerURL()
        expect(url).to.equal('http://localhost:8000')
    })

    it('should get a serverURL of server.com for production', () => {
        class JSONReaderStub {
            getConfigJSON() {
                return { env: 'production' }
            }
        }
        let jsonReaderStub = new JSONReaderStub()
        let config = new Config(jsonReaderStub)
        let url = config.getServerURL()
        expect(url).to.equal('http://server.com')
    })
    
})