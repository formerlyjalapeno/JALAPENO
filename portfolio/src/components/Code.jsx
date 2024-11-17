const Code = ({ image, title, status}) => {
    return ( 
            <article className="lang__box">
                <img src={image} alt="" />
                <div className="lang__text">
                    <h3>{title}</h3>
                    <p>{status}</p>
                </div>
            </article>
     );
}
 
export default Code;