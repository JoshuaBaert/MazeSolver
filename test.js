/**
 * Created by Joshua Baert on 7/5/2017.
 */

/*
let start = true;
let end = false;
let count = true;

console.log(!start && !end && count)

let hurry = ["#"];
console.log(typeof hurry)
hurry.unshift('#');
console.log(typeof hurry)
hurry.push('#')
console.log(typeof hurry)
*/


let compass = [3]
let x =2
let y =2

switch (compass[0]) {
	case 0 :
		y+=1;
		break;
	case 1 :
		x+=1;
		break;
	case 2 :
		y-=1;
		break;
	case 3 :
		x-=1;
		break;
	default :
		console.log("didn't do anything")
}


console.log('x:'+x+' y;'+y);

let something = `
###########A#########
#               #   #
# ############# ### #
#   #   #     #     #
# # # # # # # ##### #
# # # #   # # # #   #
# # # ##### # # # ###
# # # #     #   # # #
### # # ### ##### # #
#   # # #   #   #   #
# ##### # ### # ### #
# #     # #   #     #
##### ### # #########
#     #   # #       #
# ######### # #######
#           #       #
# ################# #
#   #   #           #
### # # # ######### #
#     #   #         #
###########B#########
`

console.log(something.replace(/\*\|\+/g, '#')
	.replace(/\ /g, '.'));