import fs from 'fs'

const getServerURL = fileName =>
    fileName
    |> fs.readFileSync
    |> JSON.parse
    |> (json => json.env)
    |> (environment => {
        if(environment === 'production') {
            return 'http://server.com'
        } else {
            return 'http://localhost:8000'
        }
    })

export default getServerURL