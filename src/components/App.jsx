import { useState } from "react";
import Seartchbar from '../components/Searchbar/Searchbar'
import Gallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";

export function App (){

  const [search,setSearch] = useState('')
  const [open,setOpen] = useState(false)
  const [img,setImg] = useState('')
  const [page,setPage] = useState(1)


const submit=(e)=>{
  e.preventDefault()
  setPage(1)
  setSearch(e.target.elements[1].value)
  e.target.reset()
}

const modalClose=()=>{
  setOpen(false)
}

const backdropClick=e=>{
  if(e.currentTarget===e.target){
    setOpen(false)
  }
}

const click=(e)=>{
  setPage(prevState=>(prevState + 1))
  console.log(page)
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
<Gallery search={search} open={openModal} page={page} downloadMore={click}/>
{open && <Modal src={img} close={modalClose} click={backdropClick}  />}
</div>
</>
  );
};
