const trainingData = [
	'I said hello',
	'You said hello',
	'We all said hello',
	'After greetings were done we said goodbye'
]

const net = new brain.recurrent.LSTM()

net.train(trainingData, {
	iterations: 1500,
	errorThresh: 0.011
})

log(net.run('We all'))