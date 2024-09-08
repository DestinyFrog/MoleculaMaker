import File from "../file.js"
import Molecula from "../molecula.js"

function remove_prefix(nome) {
	let prefix = nome

	if (nome == 'enxofre')
		prefix = 'sulfur'
	else if (nome == 'nitrogênio')
		prefix = 'nitr'

	else {

		if ( nome.endsWith("io") )
			prefix = nome.slice(0,-2)
		else if ( "aeiou".includes( nome[nome.length-1] ) )
			prefix = nome.slice(0,-1)

	}

	return prefix
}

class Acidos {
	static hidracido_halogenio({nome, simbolo}) {
		const mol = new Molecula( `ácido ${remove_prefix(nome)}ídrico`, `H${simbolo}`)
		mol.adicionarNome(`${remove_prefix(nome)}eto de hidrogênio`)
		mol.adicionarCaracterística('ácido')
		mol.adicionarCaracterística('hidrácido')
		mol.adicionarCaracterística(`${remove_prefix(nome)}eto`)
		mol.adicionarCaracterística('hidreto')

		mol.conectarAtomo(
			mol.adicionarAtomo(simbolo, -1, 'binaria'),
			mol.adicionarAtomo("H", 1)
		, 1, 'iônica')

		return mol
	}

	static hidracido_16({nome, simbolo}) {
		const mol = new Molecula( `ácido ${remove_prefix(nome)}ídrico`, `H_2${simbolo}`)
		mol.adicionarNome(`${remove_prefix(nome)}eto de hidrogênio`)
		mol.adicionarCaracterística('ácido')
		mol.adicionarCaracterística('hidrácido')
		mol.adicionarCaracterística(`${remove_prefix(nome)}eto`)
		mol.adicionarCaracterística('hidreto')

		const f1 = mol.adicionarAtomo(simbolo, -2, 'angular')

		mol.conectarAtomo( f1, mol.adicionarAtomo("H", 1) , 1, 'iônica')
		mol.conectarAtomo( f1, mol.adicionarAtomo("H", 1) , 1, 'iônica')

		return mol
	}

	static acido_halogenio_ico({nome, simbolo}) {
		const mol = new Molecula(`ácido ${remove_prefix(nome)}ico`, `H${simbolo}O_3`)
		mol.adicionarCaracterística('ácido')
		mol.adicionarCaracterística('oxiácido')

		const f1 = mol.adicionarAtomo(simbolo, -1, 'piramidal')
		mol.conectarAtomo( f1, mol.adicionarAtomo("O") , 2, 'covalente dativa')
		mol.conectarAtomo( f1, mol.adicionarAtomo("O") , 2, 'covalente dativa')

		const f2 = mol.adicionarAtomo("O", 1, 'angular V')
		mol.conectarAtomo( f1, f2, 1, 'covalente')
		mol.conectarAtomo( f2, mol.adicionarAtomo("H") , 1, 'covalente')
		return mol
	}
	
	static acido_calcogenio_ico({nome, simbolo}) {
		const mol = new Molecula(`ácido ${remove_prefix(nome)}ico`, `H_2${simbolo}O_4`)
		mol.adicionarCaracterística('ácido')
		mol.adicionarCaracterística('oxiácido')

		const f1 = mol.adicionarAtomo(simbolo, -1, 'tetraédrica')


		const f2 = mol.adicionarAtomo("O")
		mol.conectarAtomo( f1, mol.adicionarAtomo("O") , 2, 'covalente dativa')

		mol.conectarAtomo(f1, f2, 1, 'covalente')
		mol.conectarAtomo(f2, mol.adicionarAtomo("H", 0, 'angular V') )

		mol.conectarAtomo( f1, mol.adicionarAtomo("O") , 2, 'covalente dativa')

		const f3 = mol.adicionarAtomo("O")
		mol.conectarAtomo(f3, mol.adicionarAtomo("H", 0, 'angular V') )
		mol.conectarAtomo(f1, f3, 1, 'covalente')
		return mol
	}

		static acido_calcogenio_ico({nome, simbolo}) {
		const mol = new Molecula(`ácido ${remove_prefix(nome)}ico`, `H_2${simbolo}O_4`)
		mol.adicionarCaracterística('ácido')
		mol.adicionarCaracterística('oxiácido')

		const f1 = mol.adicionarAtomo(simbolo, -1, 'tetraédrica')


		const f2 = mol.adicionarAtomo("O")
		mol.conectarAtomo( f1, mol.adicionarAtomo("O") , 2, 'covalente dativa')

		mol.conectarAtomo(f1, f2, 1, 'covalente')
		mol.conectarAtomo(f2, mol.adicionarAtomo("H", 0, 'angular V') )

		mol.conectarAtomo( f1, mol.adicionarAtomo("O") , 2, 'covalente dativa')

		const f3 = mol.adicionarAtomo("O")
		mol.conectarAtomo(f3, mol.adicionarAtomo("H", 0, 'angular V') )
		mol.conectarAtomo(f1, f3, 1, 'covalente')
		return mol
	}

	/*
	static acido_17_ico({nome, simbolo}) {
		return {
			nome: `ácido ${remove_prefix(nome)}ico`,
			formula: `H${simbolo}O_3`,
			atomos: [
				{
					"simbolo": simbolo,
					"geometria": "piramidal",
					"ligacoes": [
						{"para":1, "eletrons":2, "tipo": "covalente dativa"},
						{"para":2, "eletrons":2, "tipo": "covalente dativa"},
						{"para":3, "eletrons":1, "tipo": "covalente"}
					]
				},
				{"simbolo": "O"},
				{"simbolo": "O"},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":4, "eletrons":1, "tipo": "covalente"},
					]
				},
				{"simbolo": "H"}
			]
		}
	}

	static acido_17_oso({nome, simbolo}) {
		return {
			nome: `ácido ${remove_prefix(nome)}oso`,
			formula: `H${simbolo}O_2`,
			atomos: [
				{
					"simbolo": simbolo,
					"geometria": "angular V",
					"ligacoes": [
						{"para":1, "eletrons":2, "tipo": "covalente dativa"},
						{"para":2, "eletrons":1, "tipo": "covalente"}
					]
				},
				{"simbolo": "O"},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":3, "eletrons":1, "tipo": "covalente"},
					]
				},
				{"simbolo": "H"}
			]
		}
	}

	static acido_hipo_17_oso({nome, simbolo}) {
		return {
			nome: `ácido hipo${remove_prefix(nome)}oso`,
			formula: `H${simbolo}O`,
			atomos: [
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":1, "eletrons":1, "tipo": "covalente"},
						{"para":2, "eletrons":1, "tipo": "covalente"}
					]
				},
				{"simbolo": simbolo},
				{"simbolo": "H"}
			]
		}
	}

	static acido_16_ico({nome, simbolo}) {
		return {
			nome: `ácido ${remove_prefix(nome)}ico`,
			formula: `H_2${simbolo}O_4`,
			atomos: [
				{
					"simbolo": simbolo,
					"geometria": "tetraédrica",
					"ligacoes": [
						{"para":1, "eletrons":2, "tipo": "covalente dativa"},
						{"para":2, "eletrons":2, "tipo": "covalente dativa"},
						{"para":3, "eletrons":1, "tipo": "covalente"},
						{"para":4, "eletrons":1, "tipo": "covalente"}
					]
				},
				{"simbolo": "O"},
				{"simbolo": "O"},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":5, "eletrons":1, "tipo": "covalente"},
					]
				},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":6, "eletrons":1, "tipo": "covalente"},
					]
				},
				{"simbolo": "H"},
				{"simbolo": "H"}
			]
		}
	}

	static acido_15_ico({nome, simbolo}) {
		return {
			nome: `ácido ${remove_prefix(nome)}ico`,
			formula: `H_3${simbolo}O_4`,
			atomos: [
				{
					"simbolo": simbolo,
					"geometria": "tetraédrica",
					"ligacoes": [
						{"para":1, "eletrons":2, "tipo": "covalente dativa"},
						{"para":2, "eletrons":1, "tipo": "covalente"},
						{"para":3, "eletrons":1, "tipo": "covalente"},
						{"para":4, "eletrons":1, "tipo": "covalente"}
					]
				},
				{"simbolo": "O"},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":5, "eletrons":1, "tipo": "covalente"},
					]
				},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":6, "eletrons":1, "tipo": "covalente"},
					]
				},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":7, "eletrons":1, "tipo": "covalente"},
					]
				},
				{"simbolo": "H"},
				{"simbolo": "H"},
				{"simbolo": "H"}
			]
		}
	}

	static acido_14_ico({nome, simbolo}) {
		return {
			nome: `ácido ${remove_prefix(nome)}ico`,
			formula: `H_4${simbolo}O_4`,
			atomos: [
				{
					"simbolo": simbolo,
					"geometria": "tetraédrica",
					"ligacoes": [
						{"para":1, "eletrons":1, "tipo": "covalente"},
						{"para":2, "eletrons":1, "tipo": "covalente"},
						{"para":3, "eletrons":1, "tipo": "covalente"},
						{"para":4, "eletrons":1, "tipo": "covalente"}
					]
				},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":5, "eletrons":1, "tipo": "covalente"},
					]
				},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":6, "eletrons":1, "tipo": "covalente"},
					]
				},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":7, "eletrons":1, "tipo": "covalente"},
					]
				},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":8, "eletrons":1, "tipo": "covalente"},
					]
				},
				{"simbolo": "H"},
				{"simbolo": "H"},
				{"simbolo": "H"},
				{"simbolo": "H"}
			]
		}
	}
	*/

	static Update() {
		const data = []

		File.data.forEach( (d) => {
			if (d.simbolo == "O") return

			if (d.categoria == "halogênio" && d.simbolo != 'At')
				data.push( Acidos.hidracido_halogenio(d) )

			if (d.categoria == "ametal" && d.familia == 16)
				data.push( Acidos.hidracido_16(d) )

			if ( (
				d.categoria == 'metaloide' ||
				d.categoria == 'ametal' ||
				d.categoria == 'halogênio') )
			{
				switch (d.familia) {
					case 17:
						data.push( this.acido_halogenio_ico(d) )
						break

					case 16:
						data.push( this.acido_calcogenio_ico(d) )
						break
				}
			}
		})

		return data
		File.data.forEach( (d) => {
			if ( (
				d.categoria == 'metaloide' ||
				d.categoria == 'ametal' ||
				d.categoria == 'halogênio') && d.simbolo != 'F' && d.simbolo != 'At' ) {

				switch (d.familia) {
					case 17:
						File.final_data.push( this.acido_per_17_ico(d) )
						File.final_data.push( this.acido_17_ico(d) )
						File.final_data.push( this.acido_17_oso(d) )
						File.final_data.push( this.acido_hipo_17_oso(d) )
						break

					case 16:
						File.final_data.push( this.acido_16_ico(d) ); break

					case 15:
						File.final_data.push( this.acido_15_ico(d) ); break

					// case 14:
						// File.final_data.push( this.acido_14_ico(d) ); break
				}
			}
		} )
	}
}

export default Acidos