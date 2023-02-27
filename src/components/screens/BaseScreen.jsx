import {useCountryList} from '../../repositories/api/CountryRepository.js'
import {CountryStore} from '../../store/CountryStore.js'
import {lowerNumberOption} from '../../utils/helpers.js'

import {List} from '../List.jsx'

export const BaseScreen = () => {
  const {data, isLoading, error} = useCountryList()
  const {optionList, selectedCountry, selectedOption} = CountryStore.getState()
  const {setOptionList, setSelectedCountry, setSelectedOption} = CountryStore(state => ({
    setOptionList: state.setOptionList,
    setSelectedCountry: state.setSelectedCountry,
    setSelectedOption: state.setSelectedOption,
  }))

  const handleOnClick = (country, list) => {
    setSelectedOption(null)
    setSelectedCountry(country)
    setOptionList(list.filter(item => item.country !== country.country))
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          {data.OptionA && (
            <List
              title={'Country List'}
              list={data.OptionA}
              onSelect={country => handleOnClick(country, data.OptionB)}
              renderItem={item => item.country}
            />
          )}
          {selectedCountry && optionList && (
            <div>
              <List
                title={'Option List'}
                list={optionList}
                onSelect={option => setSelectedOption(option)}
                renderItem={item => item.country}
              />
              <h2>Price</h2>
              <p>Option A: {`${selectedCountry.price} ${selectedCountry.country}`}</p>
              <p>
                Option B: {selectedOption
                  ? `${selectedOption.price} ${selectedOption.country}`
                  : `${lowerNumberOption(optionList, 'price').price} ${lowerNumberOption(optionList, 'price').country}`}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}
