const {exec} = require('child_process')
let args = process.argv.slice(2)

if (args.length == 1){
    exec('dir ' + args[3],(error, stdout, stderr) => {

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
} else if (args.length == 0){
    console.log("No args found")
} else {
    console.log("Too much args")
}

