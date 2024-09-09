import File from "../file.js"
import Molecula from "../molecula.js"

class Hipocloritos {
    static hipoclorito_de_metalalcalino({simbolo, nome}) {
        const mol = new Molecula( `hipoclorito de ${nome}`, `${simbolo}ClO`)
		mol.adicionarCaracterística('hipoclorito')
		const f1 = mol.adicionarAtomo(simbolo, 1, 'linear')
        const f2 = mol.adicionarAtomo("O", -1, 'linear')
		mol.conectarAtomo( f1, f2 )
		mol.conectarAtomo( f2, mol.adicionarAtomo("Cl") )
		return mol
    }

    static Update() {
        const data = []

        File.data.forEach(d => {
            if (d.categoria == "metal alcalino") {
                data.push( Hipocloritos.hipoclorito_de_metalalcalino(d) )
            }
        })

        return data
    }
}

export default Hipocloritos