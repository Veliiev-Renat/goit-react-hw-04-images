import PropTypes from 'prop-types';

export default function Button ({click}){
        return(<button className="Button" onClick={click}>Load more</button>
        )
}

Button.propTypes = {
    click: PropTypes.func
  };