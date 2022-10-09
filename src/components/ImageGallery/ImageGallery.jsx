import { useEffect,useState} from "react";
import Item from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types';

export default function Gallery({open,search}){

const[images,setImages] = useState([])
const[loading,setLoading] = useState(false)
const[page,setPage] = useState(1)
const [hidden,setHidden] = useState(true)


const click=(e)=>{
setPage(prevState=>(prevState + 1))
}

useEffect(()=>{
if(search===''){
    return
}

fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=30307607-789dc1a943b7edc7609021dec&image_type=photo&orientation=horizontal&per_page=12`)
.then(r=>{
    if(r.ok){
     return r.json()  
    }
    return Promise.reject(
        new Error(`Error`)
    )
    })
.then(images=>{
    console.log(images)
    const {hits} = images
    if(hits){
    if(hits.length===0){
        setHidden(false)
        alert('It is last images')
    }
}
    setImages((prevState)=>([...prevState,...hits]))
})
.catch(error=>console.log(error))
.finally(()=>setLoading(false))
},[page,search])

useEffect(()=>{
    setImages([])
    setPage(1)
    setHidden(true)
},[search])
        return(
        <>
            <ul className="ImageGallery" onClick={open}>
            {images.length > 0 &&<Item results={images}/>}
            </ul>
            {images.length > 0 && hidden && <Button click={click}/>}
            {loading && <Loader/>}
            </>
            )
    }

Gallery.propTypes = {
    click: PropTypes.func,
    open: PropTypes.func
  };

    