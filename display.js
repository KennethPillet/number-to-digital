function convertToDigitalFormat(args){
    let numberArray = []

    for (const arg of args) {
        if(arg ==  0){ 
            numberArray.push(' _\n| |\n|_|')
        }
        if(arg ==  1){ 
            numberArray.push('\n  |\n  |') 
        }
        if(arg == 2){ 
            numberArray.push(' _\n _|\n|_ ')
        }
        if(arg == 3){ 
            numberArray.push('_  \n_|\n_|')
        }
        if(arg == 4){ 
            numberArray.push('  \n|_|\n  |')
        }
        if(arg == 5){ 
            numberArray.push(' _\n|_ \n _|')
        }
        if(arg == 6){ 
            numberArray.push(' _ \n|_ \n|_|')
        }
        if(arg == 7){ 
            numberArray.push(' _\n  |\n  |')
        }
        if(arg == 8){ 
            numberArray.push(' _\n|_|\n|_|')
        }
        if(arg == 9){ 
            numberArray.push(' _\n|_|\n _|')
        }
    }
    
    numberArray.forEach(element => {
        console.log(element);
    });
}

function main(){
    const args = process.argv.slice(2)
    convertToDigitalFormat(args);
}
main()