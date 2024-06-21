import { createServer } from "http"
import { getApp } from "./app.mjs"
import config from "./config/index.mjs"

async function server() {
  const app = getApp()
  
  const server = createServer(app)
  const port = config.get('port')
  server.listen(port, () => {
    console.info(`Listening on http://localhost:${port}`)
  })
}

server().catch((error) => {
  process.exitCode = 1
  console.error(error.message)
})