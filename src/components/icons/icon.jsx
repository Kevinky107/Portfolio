import './icon.css'

function Icon({img, text, click}) {

  return (
    <picture id="imagecont" onClick={click}>
        <img alt={img} src={img}/>
        <p>{text}</p>
    </picture>
  )
}

export default Icon