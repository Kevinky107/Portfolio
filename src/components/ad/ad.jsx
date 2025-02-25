import './ad.css'

function Ad({img, text, click}) {

  return (
    <picture id='image' onClick={click}>
        <picture id='image2'>
          <img alt={img} src={img}/>
          <img id='ad' src='web.jpeg' alt='acceso directo'/>
        </picture>
        <p>{text}</p>
    </picture>
  )
}

export default Ad