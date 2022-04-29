import { MdLocationPin } from 'react-icons/md';

const Article = (article) => {
    return (
        <article className="article">
            <img src={article.image} alt={article.title}></img>
            <div>
                <div className="flex align-center" style={{gap: "1rem"}}>
                    <div className="flex align-center" style={{gap: "0"}}>
                        <MdLocationPin/>
                        <p className="uppercase">{article.location}</p>
                    </div>
                    <a className="fs-300 text-secondary" href={article.link} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h2 className="title">{article.title}</h2>
                <p className="date fw-700">{article.date}</p>
                <p className="decsription">{article.description}</p>
            </div>
        </article>
    )
}

export default Article