
const net = new brain.NeuralNetwork({
	hiddenLayers: [3]
})

const trainingData = [
	{input: [0, 0], output: [0]},
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [1, 1], output: [0]}
]

net.train(trainingData)

function test() {
	for(let data of trainingData) {
		log()
		log(`Input [${data.input.join(', ')}]`)
		log(`Output ${net.run(data.input)}`)
		log(`Expected: ${data.output[0]}`)
	}
}
test()