import File from './file.js'
import Bases from './tipos/bases.js'

File.Upload()

const data = Bases.Update()

File.Download(data)