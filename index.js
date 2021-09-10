/**
 * @description This class is used to verify user input
 */
class Card {
    /**
     * @description This method uses Luhn algorithm to check whether a 16 digit is valid - this doesn't poll any external services so isn't 100%
     * @param {string} card - Enter the 16 Digit card number to check
     * @returns {boolean} True or False - If the algorthim is met
     */
    Check(card){
        if(card.length !== 16){ throw new Error('Card must have 16 digits') }
        let check = []
        for(let i = 0; i < card.length; i++){
            /* Checks the 2 1 position */ 
            if(i % 2 === 0){
                let result = card.charAt(i) * 2;
                /* Checks to see if the result of * 2 is a two digit */
                if(result > 9){
                    /* Splits the two digit into two single values and then adds them together */ 
                    check.push(parseInt(result.toString().charAt(0)) + parseInt(result.toString().charAt(1)))
                }  else {
                    /* Push the value because its less then 10 */ 
                    check.push(parseInt(result))
                }
            } else {
                check.push(parseInt(card.charAt(i)));
            }
        }
        /* Sums the check array */ 
        let checked = check.reduce((accumulator, a) => { return accumulator + a; }, 0)
        
        /* Checks if the value ends in a zero */ 
        return checked % 10 ? false : true;
    }
}

module.exports = Card;