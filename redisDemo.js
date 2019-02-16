var redis = require('redis')

// By default redis.createClient() will use 127.0.0.1 and port 6379. 
// If you have a customized ip and and a port use var client = redis.createClient(port, host);
var client = redis.createClient()

client.on('connect', function () {
    console.log('redos client connected')
})

client.on('error', function (error) {
    console.log('Something went wrong' + error)
})

client.set('my test key', 'my test value', redis.print)
client.get('my test key', function (error, result) {
    if (error) {
        console.log(error)
        throw error
    }
    console.log('GET result ->' + result)
})