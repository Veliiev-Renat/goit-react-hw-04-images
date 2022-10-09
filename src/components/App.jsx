import { useState } from "react";
import Seartchbar from '../components/Searchbar/Searchbar'
import Gallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";

export function App (){

  const [search,setSearch] = useState('')
  const [open,setOpen] = useState(false)
  const [img,setImg] = useState('')


const submit=(e)=>{
  e.preventDefault()
  setSearch(e.target.elements[1].value)
  e.target.elements[1].value=''
}

const modalClose=()=>{
  setOpen(false)
}

const backdropClick=e=>{
  if(e.currentTarget===e.target){
    setOpen(false)
  }
}


const openModal=(e)=>{
if(e.target.nodeName==='IMG'){
    setOpen(true)
    setImg(e.target.src)
 }
}

    return (
<>
<div className="App">
<Seartchbar onSubmit={submit}/>
<Gallery search={search} open={openModal}/>
{open && <Modal src={img} close={modalClose} click={backdropClick}/>}
</div>
</>
  );
};
