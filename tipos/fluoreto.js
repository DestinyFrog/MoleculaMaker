
class Fluoretos {
	static fluoreto_de_halogenio(data) {
		const mol = new Molecula( `fluoreto de ${nome}`, `${simbolo}_2F`)
		mol.adicionarCaracterística('óxido')

		const f1 = mol.adicionarAtomo("O", 0, 'angular V')

		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
		return mol
	}

	static Update() {
		const data = []

		File.data.forEach( (d) => {
			if (d.simbolo == "F") return

			if (d.categoria == "halogênio") {
				const m = Fluoretos.fluoreto_de_halogenio(d)
				data.push(m)
			}
		})

		return data
	}
}

export default Fluoretos