import {useQuery} from '@tanstack/react-query'

import Repository from '../BaseRepository'

const fetchCountryList = async () => {
  const {data} = await Repository.get('')
  return data
}

export const useCountryList = () => useQuery(['countryList'], fetchCountryList)
