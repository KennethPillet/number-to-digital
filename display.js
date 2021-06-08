function convertToDigitalFormat(args){
    let numberArray = []

    if(args.includes('0')){ 
        numberArray.push(' _\n| |\n|_|')
    }
    if(args.includes('1')){  
        numberArray.push('\n  |\n  |') 
    }
    if(args.includes('2')){
        numberArray.push(' _\n _|\n|_ ')
    }
    if(args.includes('3')){
        numberArray.push('_  \n_|\n_|')
    }
    if(args.includes('4')){
        numberArray.push('  \n|_|\n  |')
    }
    if(args.includes('5')){
        numberArray.push(' _\n|_ \n _|')
    }
    if(args.includes('6')){
        numberArray.push(' _ \n|_ \n|_|')
    }
    if(args.includes('7')){
        numberArray.push(' _\n  |\n  |')
    }
    if(args.includes('8')){
        numberArray.push(' _\n|_|\n|_|')
    }
    if(args.includes('9')){
        numberArray.push(' _\n|_|\n _|')
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