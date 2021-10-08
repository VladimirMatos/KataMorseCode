const morseVowal = {
    "1": '.----',"2": '..---',"3": '...--',"4": '....-',"5": '.....',"6": '-....',"7": '--...',"8": '---..',"9": '----.',"0": '-----',
    "A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".","F": "..-.","G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..","M": "--","N": "-.",
    "O": "---","P": ".--.","Q": "--.-","R": ".-.","S": "...","T": "-","U": "..-","W": ".--","X": "-..-","Y": "-.--","Z": "--.."
    }

const morseCode = (message) =>{
    
    return message.toUpperCase().split("").map(vowals =>{
     if(morseVowal[vowals]){
            return morseVowal[vowals]
        }
    });
}
function morseFunction (message){
    var characters = /[a-zA-Z0-9\-\/]/;
    if (message == null || !message){
        return ('ArgumentNullException');
    }

    if(message == " "){
        return "Empty input ";
    }
    if(!isNaN(message)){
        return "Int input not accepted"
    }

    if(!message.match(characters)){

        return 'Invalid character';
        
    }else{
        const morse = morseCode(message)
        var filtered = morse.filter(function(x) {
            return x !== undefined;
       });
       return filtered.join(" $$ ");
    }
}

module.exports = morseFunction;