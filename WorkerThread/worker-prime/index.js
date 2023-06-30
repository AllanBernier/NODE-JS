
const {Worker} = require('worker_threads')

function useWorker(){
    return new Promise( (resolve, reject) => {
        const worker = new Worker('./worker.js')

        worker.on('message', message => {
            console.log(message)
            return resolve
        })

        worker.on('error', (error) => {
            reject(new Error("Worker crashed :" + error));
        })

    })
}


async function main() {
    setInterval(()=>{
        console.log("Process working")
    },1000)
    await useWorker();    
}

main()