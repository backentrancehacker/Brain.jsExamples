
const net = new brain.NeuralNetwork({
	hiddenLayers: [10],
	activation: 'sigmoid'
})

const trainingData = [
	{input: [0, 0], output: [0]},
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [1, 1], output: [0]}
]

net.train(trainingData, {
	callback: info => log(`Iterations: ${String(info.iterations).padStart(4, '0')}, Error: ${info.error}`),
  	callbackPeriod: 100
})
