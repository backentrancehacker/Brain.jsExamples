const net = new brain.NeuralNetwork({
	hiddenLayers: [20]
})
const sentiments = {
	'Monday': 'Study more',
	'Tuesday': 'Finish HW',
	'Wednesday': 'Read Worm',
	'Thursday': 'Learn Brain.js',
	'Friday': 'Go to sleep',
	'Saturday': 'Eat food',
	'Sunday': 'Feed chickens'
}

let trainingData = []
for(let key in sentiments) {
	trainingData.push({
		output:  { [sentiments[key]] : 1},
		input: { [key]: 1}
	})
}

let stats = net.train(trainingData, {
	learningRate: 0.1,
	iterations: 10000
})
function schedule(day) {
	let result = net.run({[day]: 1})
	let max = 0
	let current 

	for(let key in result) {
		if(result[key] > max){ 
			max = result[key]
			current = key
		}
	}
	log(`${day}: ${current}`)
}
schedule('Wednesday')