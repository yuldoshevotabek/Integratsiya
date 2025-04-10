import { createRoot } from 'react-dom/client'
import App from './App'
import Vazifa from './vazifa'
createRoot(document.querySelector('#root')).render(
	<>
		<App />
		<Vazifa />
	</>
)
