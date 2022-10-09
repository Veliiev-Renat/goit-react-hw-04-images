import PropTypes from 'prop-types';

export default function Item({results}){

        return(<>
            {results.map(result=>(<li className="ImageGalleryItem" key={result.id}>
            <img src={result.largeImageURL} alt={result.type} className="ImageGalleryItem-image"/>
            </li>))}
            </>
        )
    }

Item.propTypes = {
    results:PropTypes.arrayOf(PropTypes.object),
  };