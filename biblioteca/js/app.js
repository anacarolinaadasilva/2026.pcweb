import { listar} from './livros.js';
//, add , remove , get , listLivroByTitulo   , listLivroByGenero    , markAsLido    , estatistics

let livrosStr = JSON.stringify(listar())
localStorage.setItem("livros", livrosStr)

const teste = localStorage.getItem("livros")
console.log(teste)