import { useEffect, useState } from "react"
import {RepositoryItem} from './RepositoryItem'

export function RepositoryList(){
    const [repositoryList, setRepositoryList] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositoryList(data))
    },[])

   
    return(
        <section>
            <h1>Lista de Repositórios</h1>
            <ul>
               {repositoryList.map(item => <RepositoryItem data={item} key={item.id}/>)}
            </ul>
        </section>
    )
}