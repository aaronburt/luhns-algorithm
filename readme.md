# Luhn's Algorithm

Javascript implementation of Luhn's Algorithm used for checking the validity of a Credit/Debit card 16 digit number.


## Usage
```javascript
const Card = new Card();
let Check = Card.Check('4929207313500168')
console.log(Check)
```

## Disclaimer

This doesn't poll or check any external service and only uses the algorithm to check its validity, it's very possible that a number could be used that passes this test but still isn't a valid card number.