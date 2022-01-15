import { expect } from 'chai'
import Config from '../../src/Config.mjs'
import JSONReader from '../../src/JSONReader.mjs'
import fs from 'fs'

describe('Config.mjs', () => {
    
    it('should get a serverURL of localhost for QA', () => {
        const jsonReader = new JSONReader(fs, './test/integration/qa-config.json')
        const config = new Config(jsonReader)
        const url = config.getServerURL()
        expect(url).to.equal('http://localhost:8000')
    })

    it('should get a serverURL of http://server.com for Production', () => {
        const jsonReader = new JSONReader(fs, './test/integration/prod-config.json')
        const config = new Config(jsonReader)
        const url = config.getServerURL()
        expect(url).to.equal('http://server.com')
    })
})