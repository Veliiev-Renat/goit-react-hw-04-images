import { useEffect } from "react";
import PropTypes from 'prop-types';

export default function Modal({close,src,click}){

    useEffect(()=>{
      const esc=(e)=>{
        if(e.code==='Escape'){
            close()
        }
       }
        window.addEventListener('keydown',esc)
        return ()=>(window.removeEventListener('keydown',esc))
    },[close])
    


        return(
        <div className="Overlay" onClick={click}>
        <div className="Modal">
          <img src={src} alt="" />
        </div>
      </div>
        )
}


Modal.propTypes = {
    click:PropTypes.func,
    close:PropTypes.func,
    src:PropTypes.string
  };