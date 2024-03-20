interface Libro{
    titulo: string;
    autor: string;
    anioPublicacion: string;
    estaDisponible: boolean;
}

const biblioteca: Libro[] = [];

// Definición de la función AgregarLibro
function AgregarLibro(titulo: string, autor: string, anioPublicacion: string, estaDisponible: boolean): void {
    const libroAgregado: Libro = {
        titulo,
        autor,
        anioPublicacion,
        estaDisponible
    };
    // Agregar el libroAgregado a la matriz biblioteca
    biblioteca.push(libroAgregado);
}

function BuscarLibro(titulo:string):Libro | null{

    //utilizamos el metodo find para buscar en arreglo
    const libroEncontrado = biblioteca.find(libro => libro.titulo === titulo);

    return libroEncontrado || null; // devuelve un objeto de tipo biblioteca si se encuentra de lo contarario null
}


function ListarLibro(): void{
    biblioteca.forEach(libros =>{
        console.log(libros);
    }
  );
}


AgregarLibro("El Hobbit","J.R.R Tolkie","1937",true);
AgregarLibro("1984","George Orwel","1949",false);


let libroEnconatar  = BuscarLibro("El Hobbit");

if(libroEnconatar)
{
    console.log(libroEnconatar);
}
else
{
    console.log("No se encontro el libro");
    
}

const librosListados = ListarLibro();

console.log(librosListados);

export{};
