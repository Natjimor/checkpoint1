import './infoCategory.css'

const InfoCategory = (prop) =>{
    return <>
    <hr/>
    <h4>{prop.categoria}</h4>
    <p>{prop.titulo}</p>
    <p>{prop.precio}</p>
    </>
}

export default InfoCategory