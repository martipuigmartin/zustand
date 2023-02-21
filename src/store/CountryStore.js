import {create} from 'zustand'

import CountryRepository from '../repositories/api/CountryRepository.js'

export const CountryStore = create(set => ({
  countryList: {},
  optionList: {},
  selectedCountry: null,
  selectedOption: null,

  setCountryList: async () => {
    const response = await CountryRepository.list()
    response.status === 200 ? set({countryList: response.data}) : set({countryList: {}})
  },
  setOptionList: list => set({optionList: list}),
  setSelectedCountry: country => set({selectedCountry: country}),
  setSelectedOption: option => set({selectedOption: option}),
}))
