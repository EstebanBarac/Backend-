const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 8080;
const app = express();


    class Contenedor {
        constructor(name){
            this.name = name;
        }

        async save (informacion){
            try {
                let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8');
                let contenidoJson = JSON.parse(contenido);
                let ultimoIndice = contenidoJson.length - 1;
                let ultimoID = contenidoJson[ultimoIndice].id;
                informacion.id = ultimoID + 1;
                let id = informacion.id;
                
                contenidoJson.push(informacion);

                await fs.promises.writeFile(`./${this.name}`, JSON.stringify(contenidoJson) );

                return id;
            }
            catch(error){
                console.log(error.message)
            }
        }

        async getById(id) {
            try {
                let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8');
                let contenidoJson = JSON.parse(contenido);
                let contenidoExtraidoArray = null;

                contenidoJson.forEach( element => {
                    if (element.id == id){
                        contenidoExtraidoArray = element
                    }
                })
                return contenidoExtraidoArray;
            }
            catch(error){
                console,log(error.message)
            }
        }

        async getAll() {
            try{
                let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8');
                let contenidoJson = JSON.parse(contenido);
                return contenidoJson;
            }
            catch (error){
                console.log(error.message);
            }
        }

        async deleteById(id) {
            try{
                let contenido = await fs.promises.readFile(`./${this.name}`, 'utf-8');
                let contenidoJson = JSON.parse(contenido);
                let nuevoContenido = contenidoJson.filter(
                    (element) => element.id !== id
                );
                await fs.promises.writeFile(`./${this.name}`, JSON.stringify(nuevoContenido));    
            }
            catch (error) {
                console.log(error.message);
            }
        }

        async deleteAll() {
            try {
                await fs.promises.writeFile(`./${this.name}`, JSON.stringify([]));
            }
            catch (error) {
                console.log(error.message);
            }
        }
        async getProductRandom() {
            try {
                const content = await this.getAll();
                const procutRandom = content[Math.floor(Math.random() * content.length)]
                return procutRandom
            }
            catch (err) {
                console.log(error.message);
            }
        }
    }

    let contenedor = new Contenedor("productos.json")

app.get('/', async (req, res) => {
     res.send('Esta es la pagina de Inicio');
})

app.get('/productos', async (req, res) => {
    contenedor.getAll().then((products) => res.send(products))
});

app.get('/productoRandom', async (req, res) => {
    contenedor.getProductRandom().then((product) => res.send(product))
});
    
const connectedServer = app.listen(PORT, () => {
    console.log(`Server is on and running on port: ${PORT}`);
});
    
connectedServer.on('error', (error) => {
    console.log(error.message);
});