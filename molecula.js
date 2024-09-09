
class Molecula {
	/**
	 * @param {string} nome
	 * @param {string} formula
	 */
	constructor(nome, formula) {
		this.nome = [ nome ]
		this.formula = formula
		this.atomos = []
		this.caracteristicas = []
	}

	/**
	 * @param {string} nome
	 */
	adicionarNome(nome) {
		this.nome.push(nome)
	}

	/**
	 * @param {string} caracteristica 
	 */
	adicionarCaracterística(caracteristica) {
		this.caracteristicas.push(caracteristica)
	}

	/**
	 * 
	 * @param {string} simbolo 
	 * @param { ('linear'|'angular'|'angular V'|'linear'|'piramidal'|'trigonal plana'|'tetraédrica') } geometria 
	 * @param {number} carga 
	 * @returns {number} indice
	 */
	adicionarAtomo(simbolo, carga=0, geometria=null) {
		const idx = this.atomos.push({simbolo, geometria, carga, ligacoes:[]})
		return idx-1
	}

	/**
	 * 
	 * @param {number} de
	 * @param {number} para 
	 * @param {number} eletrons 
	 * @param {('iônica'|'covalente'|'covalente dativa')} tipo 
	 */
	conectarAtomo(de, para, eletrons=1, tipo='covalente') {
		const lig = {para, eletrons, tipo}
		this.atomos[de].ligacoes.push(lig)
	}

	/**
	 * @returns {Object}
	 */
	toJSON() {
		return {
			nome: this.nome,
			formula: this.formula,
			caracteristicas: this.caracteristicas,
			atomos: this.atomos
		}
	}
}

export default Molecula