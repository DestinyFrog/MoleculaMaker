import File from './file.js'
import Acidos from './tipos/acidos.js'
import Bases from './tipos/bases.js'
import Oxidos from './tipos/oxidos.js'

File.Upload()

const data = [
	... Bases.Update(),
	... Acidos.Update(),
	... Oxidos.Update()
]

File.Download(data)