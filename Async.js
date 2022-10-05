const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, res)=>{
        if(err){
            console.log(err);
            return
        }
        const second = res;
        writeFile('./content/second.txt', `Hello from Writing Test ${first} : ${second}`, (err, res)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(res);
        }
        )
    })
})