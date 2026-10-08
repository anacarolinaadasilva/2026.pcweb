
/*
TESTES para ADICIONAR LIVROS
*/
const {
    add
    , remove
    , get
    , listLivroByTitulo
    , listLivroByGenero
    , markAsLido
    , estatistics
} = require("../js/livros");

test("deve adicionar um livro à coleção", () => {

    const livros = [];

    const livro = {
        id: 1,
        titulo: "JavaScript",
        autor: "Autor",
        genero: "Programação",
        paginas: 300,
        lido: false
    };

    const resultado = add(livros, livro);

    expect(resultado).toHaveLength(1);
    expect(resultado[0]).toEqual(livro);
});

/*
Testes do Pesquisar Livros
*/

test("deve encontrar livros pelo título", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];
    //chamando a função para testes
    const resultado = listLivroByTitulo(livros,"javascript");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].titulo).toBe("JavaScript");
});

test("pesquisa sem correspondência deve retornar array vazio", () => {
    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];

    const resultado = listLivroByTitulo(livros,"Python");

    expect(resultado).toHaveLength(0);
});

/*
Testes do Filtrar Livros
*/
test("deve encontrar livros pelo genero", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];

    const resultado = listLivroByGenero(livros,"web");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].titulo).toBe("HTML e CSS");
});

test("um livro para dar erro", ()=>{
    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];
    const resultado = listLivroByTitulo(livros,"C++");

    expect(resultado).toHaveLength(0);
});

test("encontrar pelo id", () => {
    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];
    const resultado = get(livros, 2);

    //expect(resultado).toBeDefined(); 
    expect(resultado.titulo).toBe("HTML e CSS"); 
});

test("deve marcar um livro como lido", () => {

const livros = [

{

id: 1,

titulo: "JavaScript",

lido: true

}];

const resultado = markAsLido(livros, 1);
expect(resultado[0].lido).toBe(true);

}); 