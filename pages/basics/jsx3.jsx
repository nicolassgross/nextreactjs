export default function jsx3() {
    const a = '03'
    const subtitulo = "CURSO REACT E NEXT JS"
    return (
        <div>
            <h1>JSX #{a}</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{entre(9, 1 , 10)}</h4>
        </div>
    )
}

function entre (valor, min, max) {
    if(valor >= min && valor <= max) {
        return "Sim!"
    } else {
        return "Não!"
    }
}