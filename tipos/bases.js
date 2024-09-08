import File from "../file.js"
import Molecula from "../molecula.js"

class Bases {
	static hidroxido_de_metal_alcalino({simbolo, nome}) {
		const mol = new Molecula(`hidróxido de ${nome}`, `${simbolo}OH`)
		mol.adicionarCaracterística('base')

		const f1 = mol.adicionarAtomo("O", -1, 'angular V')
		const f2 = mol.adicionarAtomo(simbolo, 1)
		const f3 = mol.adicionarAtomo("H")
		mol.conectarAtomo(f1, f2, 1, 'iônica')
		mol.conectarAtomo(f1, f3)
		return mol
	}

	static hidroxido_de_metal_alcalino_terroso({simbolo, nome}) {
		const mol = new Molecula(`hidróxido de ${nome}`, `${simbolo}(OH)_2`)
		mol.adicionarCaracterística('base')

		const f1 = mol.adicionarAtomo(simbolo, 2, 'linear')
		const f2 = mol.adicionarAtomo("O", -1, "angular V")
		const f3 = mol.adicionarAtomo("O", -1, "angular V")

		mol.conectarAtomo(f1, f2, 1, 'iônica')
		mol.conectarAtomo(f1, f3, 1, 'iônica')

		mol.conectarAtomo(f2, mol.adicionarAtomo("H") )
		mol.conectarAtomo(f3, mol.adicionarAtomo("H") )
		return mol
	}

	static Update() {
		const data = []

		File.data.forEach( (d) => {
			if (d.categoria == "metal alcalino") {
				const m = Bases.hidroxido_de_metal_alcalino(d)
				data.push(m)
			}

			if (d.categoria == "metal alcalino terroso") {
				const m = Bases.hidroxido_de_metal_alcalino_terroso(d)
				data.push(m)
			}
		})
		return data
	}
}

export default Bases