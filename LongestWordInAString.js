let string ='The quick brownn fox jumped over the lazy dog';
let result = longestWord(string);
console.log("Result: "+result);

function longestWord(string){
    let words = string.split(' ');
    let maxLength = 0;
    let longestWords = [];
    words.forEach(word => {
        if(word.length > maxLength){
            maxLength = word.length;
            LongestStr = [word];
        }else if (word.length === maxLength) {
            longestWords.push(word);
        }
    });
    return longestWords;
}