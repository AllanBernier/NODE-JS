const {exec} = require('child_process')
let args = process.argv.slice(2)

exec('git add *',(error, stdout, stderr) => {

    if (error){
        console.log("Error :" + error)
        return
    }
    if (stderr){
        console.log("Stderr :" + stderr)
        return
    }
    console.log(stdout)
})
exec('git commit -m "'+ args[0] +'"',(error, stdout, stderr) => {

    if (error){
        console.log("Error :" + error)
        return
    }
    if (stderr){
        console.log("Stderr :" + stderr)
        return
    }
    console.log(stdout)
})
exec('git push',(error, stdout, stderr) => {

    if (error){
        console.log("Error :" + error)
        return
    }
    if (stderr){
        console.log("Stderr :" + stderr)
        return
    }
    console.log(stdout)
})