/* 
	Using a single for loop, write a launch countdown that outputs the following:

	30 seconds until launch.
	20 seconds until launch.
	10 seconds until launch.
	5
	4
	3
	2
	1
	Liftoff!

	Hint: You’ll need to use if statements within your “for loop” to change the output based on the loop control variable.
*/

for (let i = 30; i >= 0; i--) {
	if (i == 30){
		console.log("30 seconds until launch.")
	}
	else if (i == 20 ){
		console.log("20 seconds until launch.")
	}
	else if (i == 10) {
		console.log("10 seconds until launch.")
	}
	else if (i == 5) {
		console.log("5")
	}	
	else if (i == 4) {
		console.log("4")
	}
	else if (i == 3) {
		console.log("3")
	}
	else if (i == 2) {
		console.log("2")
	}
	else if (i == 1) {
		console.log("1")
	}
	else if (i == 0){
		console.log("Liftoff!")
	}
}