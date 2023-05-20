import { useState } from "react";
import gitLogo from "../assets/github-mark.png"
import { Container } from "./styles";
import Input from "../components/Input"
import Button from "../components/Button"
import ItemRepo from "../components/ItemRepo"
import api from "../services/api"

function App() {
  const [repos, setRepos] = useState([])
  const [currentRepo, setCurrentRepo] = useState("")

  const handleBuscarRepo = async () => {

    const {data} = await api.get(`/repos/${currentRepo}`)

    if (data.id)
    {
      const isAlreadyListed = repos.find(repo => repo.id === data.id)
      setCurrentRepo("")

      if (isAlreadyListed) { return }

      setRepos(prev => [...prev, data])
      return
    }

  }
  
  const handleRemoveRepo = (id) => setRepos(repos.filter(repo => repo.id !== id))
  
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt={"logo github"} />
      <Input Value={currentRepo} OnChange={(event) => {setCurrentRepo(event.target.value)}} />
      <Button OnClick={handleBuscarRepo} />
      {repos.map(repo => <ItemRepo Repo={repo} HandleRemove={handleRemoveRepo} key={repo.id}/>)}
      <ItemRepo />
    </Container>
  );
}

export default App;
