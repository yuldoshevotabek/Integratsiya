import { useEffect, useState } from 'react'
export default function Test() {
	const [start, setStart] = useState([])
	useEffect(() => {
		async function spring() {
			try {
				const nomi = await fetch('https://jsonplaceholder.typicode.com/todos')
				const data = await nomi.json()
				setStart(data)
			} catch (error) {
				console.log(error)
			}
		}
		spring()
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
