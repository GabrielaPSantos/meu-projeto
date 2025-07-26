import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault"/>
                <Item marca="Chevrolet" ano_lancamento={1999}/>
                <Item />
            </ul>
        </>
    )
}

/*
Antes estava assim na ul :
        <li>Item 1</li>
        <li>Item 2</li>

Depois usando fragments fico como esta acima ^
*/

export default List