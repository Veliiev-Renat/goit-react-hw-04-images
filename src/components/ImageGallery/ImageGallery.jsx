import { useEffect,useState} from "react";
import Item from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types';

export default function Gallery({open,search,page,downloadMore}){

const[images,setImages] = useState([])
const[loading,setLoading] = useState(false)
const [hidden,setHidden] = useState(false)

useEffect(()=>{
    if(search.trim() !==''){
        setImages([])
    }
},[search])

useEffect(()=>{
if(search===''){
    return
}
setHidden(true)
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
    const {hits} = images
    if(hits.length===0 || hits.length<12){
        setHidden(false)
    }
    setImages((prevState)=>([...prevState,...hits]))
})
.catch(error=>console.log(error))
.finally(()=>setLoading(false))
},[search,page])

        return(
        <>
            <ul className="ImageGallery" onClick={open}>
            {images.length > 0 &&<Item results={images}/>}
            </ul>
            {hidden && <Button click={downloadMore}/>}
            {loading && <Loader/>}
            </>
            )
    }

Gallery.propTypes = {
    click: PropTypes.func,
    open: PropTypes.func,
    page:PropTypes.number,
    downloadMore:PropTypes.func
  };

    