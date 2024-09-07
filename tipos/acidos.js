import File from "../file.js"

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

	static hidracido({nome, simbolo}) {
		return {
			nome: `ácido ${remove_prefix(nome)}ídrico`,
			formula: `H${simbolo}`,
			atomos: [
				{
					"simbolo": simbolo,
					"geometria": "binaria",
					"carga": -1,
					"ligacoes": [
						{"para":1, "eletrons":1, "tipo": "iônica"}
					]
				},
				{
					"simbolo": "H",
					"carga": 1
				}
			]
		}
	}

	static acido_per_17_ico({nome, simbolo}) {
		return {
			nome: `ácido per${remove_prefix(nome)}ico`,
			formula: `H${simbolo}O_4`,
			atomos: [
				{
					"simbolo": simbolo,
					"geometria": "tetraédrica",
					"ligacoes": [
						{"para":1, "eletrons":2, "tipo": "covalente dativa"},
						{"para":2, "eletrons":2, "tipo": "covalente dativa"},
						{"para":3, "eletrons":2, "tipo": "covalente dativa"},
						{"para":4, "eletrons":1, "tipo": "covalente"}
					]
				},
				{"simbolo": "O"},
				{"simbolo": "O"},
				{"simbolo": "O"},
				{
					"simbolo": "O",
					"geometria": "angular V",
					"ligacoes": [
						{"para":5, "eletrons":1, "tipo": "covalente"},
					]
				},
				{"simbolo": "H"}
			]
		}
	}

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

	static Update() {
		File.data.forEach( (d) => {
			if (d.simbolo == "O") return

			if (d.categoria == "halogênio" && d.simbolo != 'At') {
				const m = Acidos.hidracido(d)
				File.final_data.push(m)
			}

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