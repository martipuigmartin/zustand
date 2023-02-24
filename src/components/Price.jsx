export const Price = ({title, selectedCountry, selectedOption, optionsList, lowerNumberOption}) => (
  <>
    <h2>{title}</h2>
    <p>Option A: {`${selectedCountry.price} ${selectedCountry.country}`}</p>
    <p>
      Option B: {selectedOption
        ? `${selectedOption.price} ${selectedOption.country}`
        : `${lowerNumberOption(optionsList, 'price').price} ${lowerNumberOption(optionsList, 'price').country}`}
    </p>
  </>
)
