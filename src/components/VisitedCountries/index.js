import './index.css'

const VisitedCountries = props => {
  const {countryDetails, onClickRemove} = props
  const {name, imageUrl, id} = countryDetails
  const onClickRemoveBtn = () => {
    onClickRemove(id)
  }
  return (
    <li className="visited-country-list">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="name-remove-container">
        <p className="country-name">{name}</p>
        <button
          className="remove-button"
          type="button"
          onClick={onClickRemoveBtn}
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
