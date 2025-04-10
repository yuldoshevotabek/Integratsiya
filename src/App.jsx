import React, { useEffect, useState } from 'react'
function App() {
	const [list, setList] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res => res.json())
			.then(data => setList(data))
	}, [])
	return (
		<>
			<ul>
				{list.map(item => {
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
