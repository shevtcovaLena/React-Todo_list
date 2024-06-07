import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToDoContextProvider } from './context/context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <ToDoContextProvider>
    <App />
  </ToDoContextProvider>
)
