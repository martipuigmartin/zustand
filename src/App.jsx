import {List} from './components/List.jsx'
import {Price} from './components/Price.jsx'

import {useCountryList} from './repositories/api/CountryRepository.js'
import {CountryStore} from './store/CountryStore.js'

import {lowerNumberOption} from './utils/helpers.js'

export const App = () => {
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
              <Price
                title={'Price'}
                selectedCountry={selectedCountry}
                selectedOption={selectedOption}
                optionsList={optionList}
                lowerNumberOption={lowerNumberOption}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}
