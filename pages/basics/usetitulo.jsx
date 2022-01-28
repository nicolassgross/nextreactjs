import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return(
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e exlcuir coisas!"
            />

            <Titulo 
                principal="Página de login"
                secundario="Inform seu email e senha!"
                pequeno={true}
            />
            <Titulo 
                principal="Página de login"
                secundario="Inform seu email e senha!"
                pequeno
            />
        </div>
    )
}