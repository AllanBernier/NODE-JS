const {exec} = require('child_process')
let args = process.argv.slice(2)

exec('git add *')
exec('git commit -m "'+ args[0] +'"')
exec('git push')