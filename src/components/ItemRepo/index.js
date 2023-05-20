import { ItemContainer } from "./styles"

function ItemRepo({ Repo, HandleRemove })
{
    if (Repo === undefined) { return }

    return (
        <ItemContainer>
            <h3>{Repo.name}</h3>
            <p>{Repo.full_name}</p>
            <a href={Repo.html_url} target={"_blank"} rel={"noreferrer"} >Ver repositório</a>
            <br />
            <button className="remover" onClick={() => {HandleRemove(Repo.id)}}>Remover</button>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo