import Frase from "./Frase"

function HelloWorld() {
    return (
        <div>
            < Frase />
            <h1>Meu primeiro componente</h1>
            < Frase />
            < Frase />
        </div>
    )
}

/* componente é reutilizavel note como <Frase /> foi usado mais de uma vez
   e também é possivel criar um componente (frase) e importar para outro componente (helloWorld) que depois vai para o componenten principal (App.js) */

export default HelloWorld