
import { InputContainer } from "./styles"

export default function Input({ Value, OnChange}) 
{
    return (
        <InputContainer>
            <input value={Value} placeholder={"Coloque usuário/repositório aqui..."} onChange={OnChange} />
            <p>O repositório deve ser público</p>
        </InputContainer>

    )
}