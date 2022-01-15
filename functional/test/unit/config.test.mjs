import { expect } from 'chai'
import getServerURL from '../../build/config.js'

const readFileStub = () => `{ "env": "qa" }`

describe('config.js', () => {

    it('should get a serverURL of localhost for QA', () => {
        const parseStub = () => ({ env: "qa" })
        const url = getServerURL(readFileStub, parseStub, 'some config.json')
        expect(url).to.equal('http://localhost:8000')
    })

    it('should get a serverURL of server.com for production', () => {
        const parseStub = () => ({ env: "production" })
        const url = getServerURL(readFileStub, parseStub, 'some config.json')
        expect(url).to.equal('http://server.com')
    })
})