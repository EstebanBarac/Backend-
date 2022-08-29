    const fs = require('fs');


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
                let contenidoExtraidoArray

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
                await fs.promises.writeFile(`./${this.name}`, JSON.stringify('array borrado'));
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }

        let contenedor = new Contenedor("productos.json")
        
        let informacionNueva = {
                "id": 1,
                "title": "Campera",
                "price": 380,
                "thumbnail": "hhhttps/img4.com" 
            }

        //METODOS
            

        contenedor.save(informacionNueva).then(res => {
            console.log(res);
        });

        contenedor.getById(3).then(res => {
            console.log(res);
        });

        contenedor.getAll().then( res => {
            console.log(res);
        });

        contenedor.deleteAll();