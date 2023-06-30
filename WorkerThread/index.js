

async function  intensiveCPUTask(){
    console.log('Intensive CPU Task Start')

    let i = 0;
    while (i < Math.pow(10,10)){
        i++;
    }

    console.log('Intensive CPU Task End')

}

async function main() {
    setInterval(()=>{
        console.log("Process working")
    },1000)
    res = await intensiveCPUTask()    
}

main()