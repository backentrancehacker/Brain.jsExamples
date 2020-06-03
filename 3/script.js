const trainingData = [
	[0, 1, 2, 3, 4, 5],
	[5, 4, 3, 2, 1, 0]
]

const net = new brain.recurrent.LSTMTimeStep()

net.train(trainingData, {
	callback: info => log(`Iterations: ${String(info.iterations).padStart(4, '0')}, Error: ${info.error}`),
  	callbackPeriod: 100
})

log(net.run([0, 1, 2]))