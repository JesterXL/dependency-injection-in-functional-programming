const getServerURL = (readFile, parse, fileName) =>
    fileName
    |> readFile
    |> parse
    |> (json => json.env)
    |> (environment => {
        if(environment === 'production') {
            return 'http://server.com'
        } else {
            return 'http://localhost:8000'
        }
    })

export default getServerURL