import './proyect.css'

function Proyect({img, text, info, repo, web}) {

  return (
    <picture id='image'>
        <picture id='image2'>
          <img alt={img} src={img}/>
          <img id='ad' src='web.jpeg' alt='acceso directo'/>
        </picture>
        <p>{text}</p>
        <div className='info'>
          {info}
          <div>
            <button onClick={() => {window.open(web, '_blank');}}>WEB</button>
          </div>
          <div>
            <button onClick={() => {window.open(repo, '_blank');}}>GitHub</button>
          </div>
        </div>
    </picture>
  )
}

export default Proyect