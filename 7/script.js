const trainingData = [
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [0, 0], output: [0]},
]

const net = new brain.NeuralNetwork({hiddenLayers: [3]})
net.train(trainingData)

log('Before reinfocement [1, 1]')
log(net.run([1, 1])[0])

trainingData.push({input: [1, 1], output: [0]})
net.train(trainingData)

log('After reinfocement [1, 1]')
log(net.run([1, 1])[0])
