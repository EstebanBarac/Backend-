class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = String(nombre),
        this.apellido = String(apellido),
        this.mascotas = [...mascotas],
        this.libros = [...libros]
    }
    getFullName = () => (`${this.nombre} ${this.apellido}`)

    addMascotas = (mascota) => this.mascotas.push(mascota)

    countMascotas = () => this.mascotas.length

    addBook = (nombre, autor) => this.libros.push({"nombre": nombre, "autor": autor})
    
    getBooksNames = () => this.libros.map(libros => libros.nombre)
}

const usuario1 = new Usuario ("Elon", "Musk", [{nombre:"El señor de las moscas", autor:"William Golding"}], ["perro", "gato"])

        console.log(usuario1.getFullName());

        usuario1.addMascotas("iguana");

        console.log(usuario1.mascotas);

        console.log(usuario1.countMascotas());

        usuario1.addBook("Crónicas marcianas", "Ray Bradbury");

        console.log(usuario1.libros);

        console.log(usuario1.getBooksNames());