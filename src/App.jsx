import { useEffect, useState } from 'react'
function App() {
	const [start, setStart] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res => res.json())
			.then(data => setStart(data))
	}, [])
	return (
		<>
			<ul>
				{start.map(item => {
					return (
						<li key={item.id}>
							<p>{item.title}</p>
						</li>
					)
				})}
			</ul>
		</>
	)
}
export default App
