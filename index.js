import File from './file.js'
import Acidos from './tipos/acidos.js'
import Bases from './tipos/bases.js'

File.Upload()

const data = [
	... Bases.Update(),
	... Acidos.Update()
]

File.Download(data)