export default function Vazifa() {
	const ismlar = ['Otabek', 'Anvar', 'Dildora']
	function soat(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
	async function foydalanuvchi() {
		for (let i = 0; i < ismlar.length; i++) {
			console.log('Ismni tekshiryapmiz...')
			await soat(2000)
			console.log(`Salom, ${ismlar[i]}!`)
		}
	}
	foydalanuvchi()
}
