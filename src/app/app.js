import express from 'express'
import { HOST, PORT } from './configs/env.js'
import router from './router/router.js'
import database from './configs/database.js'
import ProductDAO from './utils/ProductDAO.js'

const app = express()

app.use(express.json())
app.use("/api", router)

async function startServer() {
    try {
        await database
        await ProductDAO.createProductTables()
        await ProductDAO.createMigrationsTable();
        await ProductDAO.insertingProductData()
        app.listen(PORT, HOST, () => {
            console.log(` -> Servidor iniciou em: http://${HOST}:${PORT}/<end-point>`)
        })
    } catch (error) {
        console.error(' -> Erro ao iniciar o servidor:', error)
    }
}

startServer()