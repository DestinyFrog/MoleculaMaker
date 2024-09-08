
class Sulfetos {
	static sulfetos_de_halogenio({nome, simbolo}) {
		const mol = new Molecula( `monóxido de ${nome}`, `${simbolo}_2O`)
		mol.adicionarNome(`${remove_prefix(nome)}eto de oxigênio`)

		mol.adicionarCaracterística('óxido')
		mol.adicionarCaracterística(`${remove_prefix(nome)}eto`)

		const f1 = mol.adicionarAtomo("O", 0, 'angular V')

		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
		mol.conectarAtomo( f1, mol.adicionarAtomo(simbolo) )
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
				data.push(  Oxidos.dioxido_de_calcogenios(d) )
			}

			return
		})

		return data
	}
}

export default Sulfetos