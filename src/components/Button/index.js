
import { ButtonContainer } from "./styles"

function MyButton({ OnClick }) 
{
    return (
        <ButtonContainer onClick={OnClick}>
            Buscar
        </ButtonContainer>
    )
}

export default MyButton