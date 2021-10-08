const morseVowals ={
    "1": '.----',"2": '..---',"3": '...--',"4": '....-',"5": '.....',"6": '-....',"7": '--...',"8": '---..',"9": '----.',"0": '-----',
    "A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".","F": "..-.","G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..","M": "--","N": "-.",
    "O": "---","P": ".--.","Q": "--.-","R": ".-.","S": "...","T": "-","U": "..-","W": ".--","X": "-..-","Y": "-.--","Z": "--.."
}

const morseCode = (message) =>{
    return message.toUpperCase().split("").map(vowals =>{
        if(morseVowals[vowals]){
            return morseVowals[vowals];
        }
    })
}
function morseFunction(message) {

    var characters = /[a-zA-Z0-9\-\/]/;

    if(message == null || !message){
        return 'Null exception';
    }

    if(message == ' ' ){
        return "Not accept empty input";
    }

    if(!isNaN(message)){
        return "Not accept number input";
    }

    if(!message.match(characters)){
        return 'Not accept special character';
    }else{
        const morse = morseCode(message);
        var filtered = morse.filter(function(x) {
            return x !== undefined;
        });
        return filtered.join(" $$ ")
    }
}

module.exports = morseFunction;