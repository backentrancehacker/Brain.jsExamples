const trainingData = [
	{input: 'hello', output: 'greeting'},
	{input: 'greetings', output: 'greeting'},
	{input: 'bye', output: 'closing'},
	{input: 'cya later', output: 'closing'}
]

const net = new brain.recurrent.LSTM()

net.train(trainingData, {
	iterations: 100,
	errorThresh: 0.011
})

log(net.run('hi'))