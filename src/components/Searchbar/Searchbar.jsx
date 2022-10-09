import PropTypes from 'prop-types'

export default function Seartchbar({onSubmit}){

        return(
    <header className="Searchbar">
  <form className="SearchForm" onSubmit={onSubmit}>
  <button type="submit" className="SearchForm-button">
      <span className="button-label">Search</span>
    </button>
<label className="SearchForm-button-label" htmlFor="1"/>
    <input
      id="1"
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>)
    
}

Seartchbar.proTypes ={
  onSubmit:PropTypes.func
}
