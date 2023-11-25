import "@styles/components/Card.css"

const Card = ({ image, title }) => {
    return (
        <div className="card-container">
            <article className="card">
                <figure className="card--image">
                    <img src={image} alt={title} />
                </figure>

                <h3 className="card--title">{ title }</h3>
            </article>
        </div>
    )
}

export default Card;