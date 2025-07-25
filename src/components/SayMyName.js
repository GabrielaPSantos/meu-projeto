function SayMyName(props) {
    return (
        <div>
            <p>Fala ai {props.nome} suave?</p>
        </div>
    )
}

export default SayMyName

// normalmente se passa dados dinâmicos e não fixos(const) para props