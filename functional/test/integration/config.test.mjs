import { expect } from 'chai'
import getServerURL from '../../build/config.js'
import fs from 'fs'

describe('config.js', () => {

    it('should get a serverURL of localhost for QA', () => {
        const url = getServerURL(fs.readFileSync, JSON.parse, './test/integration/qa-config.json')
        expect(url).to.equal('http://localhost:8000')
    })

    it('should get a serverURL of server.com for production', () => {
        const url = getServerURL(fs.readFileSync, JSON.parse, './test/integration/prod-config.json')
        expect(url).to.equal('http://server.com')
    })
})