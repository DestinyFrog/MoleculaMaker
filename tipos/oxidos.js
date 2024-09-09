import File from "../file.js"
import Molecula from "../molecula.js"

class Oxidos {
	static monoxido_de_dihalogenio({simbolo, nome}) {
		const mol = new Molecula( `monóxido de ${nome}`, `${simbolo}_2O`)

		mol.adicionarCaracterística('óxido')

		const f1 = mol.adicionarAtomo("O", 0, 'angular V')

		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
		return mol
	}

	static dioxido_de_halogenio({simbolo, nome}) {
		const mol = new Molecula( `dióxido de ${nome}`, `${simbolo}O_2`)

		mol.adicionarCaracterística('óxido')

		const f1 = mol.adicionarAtomo("O", 0, 'angular V')

		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
		return mol
	}

	static dioxido_de_14({simbolo, nome}) {
		const mol = new Molecula( `dióxido de ${nome}`, `${simbolo}_2O`)

		mol.adicionarCaracterística('óxido')

		const f1 = mol.adicionarAtomo(simbolo, 0, 'linear')

		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2)
		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2)
		return mol
	}

	static monoxido_de_calcogenios({simbolo, nome}) {
		const mol = new Molecula( `monóxido de ${nome}`, `${simbolo}O`)
		mol.adicionarCaracterística('óxido')
		const f1 = mol.adicionarAtomo(simbolo, 0, 'linear')
		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2, 'covalente' )
		return mol
	}

	static dioxido_de_calcogenios({simbolo, nome}) {
		const mol = new Molecula( `dióxido de ${nome}`, `${simbolo}O_2`)
		mol.adicionarCaracterística('óxido')
		const f1 = mol.adicionarAtomo(simbolo, 0, 'angular V')
		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2, 'covalente' )
		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2, 'covalente dativa' )
		return mol
	}

	static trioxido_de_calcogenios({simbolo, nome}) {
		const mol = new Molecula( `trióxido de ${nome}`, `${simbolo}O_3`)
		mol.adicionarCaracterística('óxido')
		const f1 = mol.adicionarAtomo(simbolo, 0, 'trigonal plana')
		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2, 'covalente' )
		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2, 'covalente dativa' )
		mol.conectarAtomo( f1, mol.adicionarAtomo("O"), 2, 'covalente dativa' )
		return mol
	}

	static Update() {
		const data = []

		File.data.forEach( (d) => {
			if (d.simbolo == "O") return

			if (d.categoria == "halogênio") {
				data.push( Oxidos.monoxido_de_dihalogenio(d) )
			}

			if (d.familia == 16) {
				data.push(  Oxidos.monoxido_de_calcogenios(d) )
				data.push(  Oxidos.dioxido_de_calcogenios(d) )
				data.push(  Oxidos.trioxido_de_calcogenios(d) )
			}

			if (d.familia == 14) {
				data.push(  Oxidos.dioxido_de_14(d) )
			}

			return
		})

		return data
	}
}

export default Oxidos