import '../styles/styles.scss'

type ReposiotryItemProps = {
    data: {
        id: string
        name: string;
        description: string;
        html_url: string;
    }
    

}



export function RepositoryItem({data} : ReposiotryItemProps){

    return(
        <li>
            
            <strong>{data.name}</strong>
            <p>{data.description}</p>
            <a href={data.html_url}>Acessar repositório</a>
        </li>
       
    )
}