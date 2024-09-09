import File from './file.js'
import Molecula from './molecula.js'
import Acidos from './tipos/acidos.js'
import Bases from './tipos/bases.js'
import Hipocloritos from './tipos/hipoclorito.js'
import Oxidos from './tipos/oxidos.js'

File.Upload()

const agua = new Molecula( `água`, `H_2O`)
agua.adicionarCaracterística('óxido')
let f1 = agua.adicionarAtomo("O", 0, 'angular V')
agua.conectarAtomo( f1, agua.adicionarAtomo("H") )
agua.conectarAtomo( f1, agua.adicionarAtomo("H") )

const amonia = new Molecula( `amônia`, `NH_3`)
amonia.adicionarCaracterística('óxido')
f1 = amonia.adicionarAtomo("N", 0, 'piramidal')
amonia.conectarAtomo( f1, amonia.adicionarAtomo("H") )
amonia.conectarAtomo( f1, amonia.adicionarAtomo("H") )
amonia.conectarAtomo( f1, amonia.adicionarAtomo("H") )

const metano = new Molecula( `metano`, `CH_4`)
metano.adicionarCaracterística('óxido')
f1 = metano.adicionarAtomo("C", 0, 'tetraédrica')
metano.conectarAtomo( f1, metano.adicionarAtomo("H") )
metano.conectarAtomo( f1, metano.adicionarAtomo("H") )
metano.conectarAtomo( f1, metano.adicionarAtomo("H") )
metano.conectarAtomo( f1, metano.adicionarAtomo("H") )

const fosfato = new Molecula( `fosfato`, `PO_4[3-]`)
f1 = fosfato.adicionarAtomo("P", 0, 'tetraédrica')
fosfato.conectarAtomo( f1, fosfato.adicionarAtomo("O", -1), 1 )
fosfato.conectarAtomo( f1, fosfato.adicionarAtomo("O", -1), 1 )
fosfato.conectarAtomo( f1, fosfato.adicionarAtomo("O", -1), 1 )
fosfato.conectarAtomo( f1, fosfato.adicionarAtomo("O"), 2 )

const sulfato = new Molecula( `sulfato`, `SO_4[2-]`)
f1 = sulfato.adicionarAtomo("S", 0, 'tetraédrica')
sulfato.conectarAtomo( f1, sulfato.adicionarAtomo("O", -1), 1 )
sulfato.conectarAtomo( f1, sulfato.adicionarAtomo("O", -1), 1 )
sulfato.conectarAtomo( f1, sulfato.adicionarAtomo("O"), 2 )
sulfato.conectarAtomo( f1, sulfato.adicionarAtomo("O"), 2 )

const data = [
	agua,
	amonia,
	metano,
	fosfato,
	sulfato,
	... Bases.Update(),
	... Acidos.Update(),
	... Oxidos.Update(),
	... Hipocloritos.Update()
]

File.Download(data)