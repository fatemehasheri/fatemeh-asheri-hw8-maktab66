function ingExtractor(string) {
    let string1=string.replace(/[^a-zA-Z ]/g, "").split(" ")
    let string2=string1.filter((char) => {
        if (char.replace("ing", "").length === char.toLowerCase().replace("ing", "").replace(/[aeiou]/g, "").length ) {
            return false
        }
        if (char.includes("ing")) {
            return true
        }
    })
    return string2
}

console.log(ingExtractor("coming bringing Letting sing"))
console.log(ingExtractor("going Ping, king sHrink dOing"))
console.log(ingExtractor("zing went ring, ding wing SINk"))












/*function ingExtractor(str){
    let str1;
    let str2;
    let myArray=[]
    if(str.endsWith('ing')){
        str1 = str.replace("ing","")
        if (str1.includes("i" || "a" ||"e" || "u" || "o")) {
            myArray.push(str1)
            
        }
    }
    return myArray
}
console.log(ingExtractor("deing"))*/
