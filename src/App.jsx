import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {BaseScreen} from './components/screens/BaseScreen.jsx'

const client = new QueryClient()

export const App = () => (
  <QueryClientProvider client={client}>
    <BaseScreen />
  </QueryClientProvider>
)
