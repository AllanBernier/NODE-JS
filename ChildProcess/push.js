const {exec} = require('child_process')
let args = process.argv.slice(2)

exec('git add *',(error, stdout, stderr) => {
    exec('git commit -m "'+ args[0] +'"',(error, stdout, stderr) => {
        exec('git push')
    })
    
})
