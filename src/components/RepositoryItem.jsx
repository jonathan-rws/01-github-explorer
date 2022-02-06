import '../styles/styles.scss'

export function RepositoryItem({data}){

    return(
        <li>
            <strong>{data.name}</strong>
            <p>{data.description}</p>
            <a href={data.html_url}>Acessar repositório</a>
        </li>
       
    )
}