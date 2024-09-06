import './window.css';
import Draggable from 'react-draggable';

function Window({name, close, children}) {

  return (
    <Draggable>
        <div className='popup'>
            <div className="header">
                <h4>{name}</h4>
                <picture onClick={close}>
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

export default Window