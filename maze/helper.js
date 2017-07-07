/**
 * Created by Joshua Baert on 7/6/2017.
 */


module.exports = {
	arrayToStr(array) {
		return array.map(line => line.join('')).join('\n')
	},
	
}