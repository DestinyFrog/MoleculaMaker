import File from "../file.js"

class Oxido {

	static monoxido_de_dihalogenio({simbolo, nome}) {
		return {
			nome: `monóxido de di${nome}`,
			formula: `${simbolo}_2O`,
			atomos: [
				{
					simbolo: "O",
					geometria: "angular V",
					ligacoes: [
						{para:1, eletrons:1, tipo: "covalente"},
						{para:2, eletrons:1, tipo: "covalente"}
					]
				},
				{
					simbolo: simbolo
				},
				{
					simbolo: simbolo
				}
			]
		}
	}

	static dioxido_de_halogenio({simbolo, nome}) {
		return {
			nome: `dióxido de ${nome}`,
			formula: `${simbolo}O_2`,
			atomos: [
				{
					simbolo: simbolo,
					geometria: "linear",
					ligacoes: [
						{para:1, eletrons:2, tipo: "covalente"},
						{para:2, eletrons:2, tipo: "covalente dativa"}
					]
				},
				{simbolo: "O"},
				{simbolo: "O"}
			]
		}
	}

	static pentoxido_de_halogenio({simbolo, nome}) {
		return {
			nome: `pentóxido de di${nome}`,
			formula: `${simbolo}_2O_5`,
			atomos: [
				{
					simbolo: "O",
					geometria: "angular V",
					ligacoes: [
						{para:1, eletrons:1, tipo: "covalente"},
						{para:2, eletrons:1, tipo: "covalente"}
					]
				},
				{
					simbolo: simbolo,
					geometria: "tetraédrica",
					ligacoes: [
						{para:3, eletrons:2, tipo: "covalente dativa"},
						{para:4, eletrons:2, tipo: "covalente dativa"},
						{para:5, eletrons:2, tipo: "covalente dativa"}
					]
				},
				{
					simbolo: simbolo,
					geometria: "tetraédrica",
					ligacoes: [
						{para:6, eletrons:2, tipo: "covalente dativa"},
						{para:7, eletrons:2, tipo: "covalente dativa"},
						{para:8, eletrons:2, tipo: "covalente dativa"}
					]
				},
				{ simbolo: "O" },
				{ simbolo: "O" },
				{ simbolo: "O" },
				{ simbolo: "O" },
				{ simbolo: "O" },
				{ simbolo: "O" }
			]
		}
	}

	static dioxido_de_14({simbolo, nome}) {
		return {
			nome: `dióxido de ${nome}`,
			formula: `${simbolo}O_2`,
			atomos: [
				{
					simbolo: simbolo,
					geometria: "linear",
					ligacoes: [
						{para:1, eletrons:2, tipo: "covalente"},
						{para:2, eletrons:2, tipo: "covalente"}
					]
				},
				{
					simbolo: "O"
				},
				{
					simbolo: "O"
				}
			]
		}
	}

	static dioxido_de_16({simbolo, nome}) {
		return {
			nome: `dióxido de ${nome}`,
			formula: `${simbolo}O_2`,
			atomos: [
				{
					simbolo: simbolo,
					geometria: "angular",
					ligacoes: [
						{para:1, eletrons:2, tipo: "covalente"},
						{para:2, eletrons:2, tipo: "covalente"}
					]
				},
				{
					simbolo: "O"
				},
				{
					simbolo: "O"
				}
			]
		}
	}

	static Update() {
		File.data.forEach( (d) => {
			if (d.simbolo == "O") return

			if (d.categoria == "halogênio") {
				const m = Oxido.monoxido_de_dihalogenio(d)
				File.final_data.push(m)

				const m1 = Oxido.dioxido_de_halogenio(d)
				File.final_data.push(m1)

				// const m1 = Oxido.pentoxido_de_halogenio(d)
				// File.final_data.push(m1)
			}

			if (d.familia == 14) {
				const m = Oxido.dioxido_de_14(d)
				File.final_data.push(m)
			}

			if (d.familia == 16) {
				const m = Oxido.dioxido_de_16(d)
				File.final_data.push(m)
			}
		})
	}
}

export default Oxido