import createDatabaseConnection from './database.js'
import createWebServer from './webserver.js'

function createCore(configurations = {}) {
    // configurations é algo mockado para manter os contratos estabelecidos nas factories.
    const database = configurations.database || createDatabaseConnection()
    const webserver = configurations.webserver || createWebServer()

    function start() {
        console.log(`> [core] Starting...`)
        database.start()
        webserver.start()
        console.log(`> [core] Starting done! System Running!`)
    }

    function stop() {
        console.log(`> [core] Stopping...`)
        database.stop()
        webserver.stop()
        console.log(`> [core] Stopping done!`)
    }

    return {
        start,
        stop
    }
}

export default createCore