const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to North Korea'
NONE_SELECTED = 0;
const customer = 1;
let location = RSA;

if (location === RSA){
    console.log('shipping === R400')
}

location = NAM
if (location === NAM){
    console.log('shipping === $600')
}
else {
    console.log('shipping === $800')
}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2 
const pens = 5 * 'NONE_SELECTED'

if (shoes + batteries + pens + shirts > 1000 && location === NAM && customer <2) {
    console.log('shipping=== $600') 
}
    else {
        console.log('free shipping')
    }
    if (shoes + batteries + pens + shirts > 1000 && location === RSA && customer <2){
    console.log('freee shipping')} 
    

if (shipping === 0 && customer !== 1){
    console.log(FREE_WARNING)
}

location = Nk
if (location === NK){
    console.log(BANNED_WARNING)
    console.log ('price:$',shoes + batteries + pens + shirts + 800)
}
