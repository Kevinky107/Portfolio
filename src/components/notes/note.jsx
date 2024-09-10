import './note.css';
import Draggable from 'react-draggable';

function note({name, close, children}) {

  return (
    <Draggable>
        <div className='note'>
            <div className="header">
                <h4>{name}</h4>
                <picture id="close" onClick={close}>
                    x
                </picture>
            </div>
            <div className="main">
            {children}
            </div>
        </div>
    </Draggable>
  )
}

export default note