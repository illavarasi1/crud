import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './core/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <Provider store={store}>
  <QueryClientProvider client={new QueryClient()}>
    <App />
    </QueryClientProvider>
 </Provider>
  </StrictMode>,
)
