import { JSXElementConstructor, useEffect, useState } from "react"
import {RepositoryItem} from './RepositoryItem'

type Repository = {
    id: string
    name: string
    description: string
    html_url: string
}

export function RepositoryList(){
    const [repositoryList, setRepositoryList] = useState<Repository[]>([])

    useEffect(()=>{
        fetch('https://api.github.com/users/jonathan-rws/repos')
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