const eventEmitter = require('events');

let em = new eventEmitter.EventEmitter();


em.on('FirstEvent', function(){
    console.log("First Event")
})

em.emit('FirstEvent');

em.on('hello-name', function(name){
    console.log("Hello " + name)
})

em.emit('hello-name','NodeJs')


//Exemple 2 

function LoopProcessor(num) {
    let e = new eventEmitter.EventEmitter();
    setTimeout(function () {
        
        for (let i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            e.emit('AfterProcess', i);
        }
    }
    , 2000)
    return e;
}

const lp = LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});

console.log("Program Ended.");



/// Process 1
em.on('get-random', function (){
    console.log('Before emit')
    em.emit('get-result', Math.random()); 
    console.log('After emit')
})

/// Process 2
em.on('get-result', function(result){
    console.log(result)
})

console.log('Debut programme')
em.emit('get-random')
console.log('Fin programme')
