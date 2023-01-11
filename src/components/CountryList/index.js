import './index.css'

const CountryList = props => {
  const {countryDetails, onClickVisit} = props
  const {isVisited, name, id} = countryDetails
  const onClickChangeVisit = () => {
    onClickVisit(id)
  }
  return (
    <li className="country-list">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button
          className="visit-button"
          type="button"
          onClick={onClickChangeVisit}
        >
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryList
