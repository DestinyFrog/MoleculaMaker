import fs from 'fs'

/**
 * @typedef Atom
 * @prop {string} nome
 * @prop {number|null} raio_atomico distância do á camadas mais externa de elétrons (nanômetro nm)
 * @prop {number|null} eletronegatividade tendência á atrair outros elétrons em uma ligação química
 * @prop {number|null} massa_atomica massa do átomo (unidade de massa atômica 'u')
 * @prop {string} categoria categorias que dividem elementos pelas suas propriedades físicas e químicas
 * @prop {number} numero_atomico número atômico
 * @prop {number} periodo
 * @prop {number} familia
 * @prop {string} simbolo
 * @prop {string} fase estado físico natural do elemento
 * @prop {number} xpos posição no eixo X da Tabela Periódica
 * @prop {number} ypos posição no eixo Y da Tabela Periódica
 * @prop {number[]} camadas elétrons por camada
 * @prop {string} configuracao_eletronica Configuração Eletrônica no formato escrito
 */

export function remove_prefix(nome) {
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

class File {
	/**
	 * @type {Atom[]}
	 */
	static data;
	static final_data = []

	static Upload() {
		const txt = fs.readFileSync('./atoms.json')
		const json_data = JSON.parse(txt)
		File.data = json_data
	}

	static Download(data) {
		const txt = JSON.stringify(data)
		fs.writeFileSync('./final.json', txt)
	}
}

export default File