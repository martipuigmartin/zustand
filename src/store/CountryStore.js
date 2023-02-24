import {create} from 'zustand'

export const CountryStore = create(set => ({
  optionList: {},
  selectedCountry: null,
  selectedOption: null,

  setOptionList: list => set({optionList: list}),
  setSelectedCountry: country => set({selectedCountry: country}),
  setSelectedOption: option => set({selectedOption: option}),
}))
