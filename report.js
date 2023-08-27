const newman = require('newman');

newman.run({
    //collection: require('.collection/dmoney.json),
    collection:'https://api.postman.com/collections/29168451-6a117a2b-c739-4b46-8aba-cdf503632625?access_key=PMAT-01H8VTZAW8TSTKFRW9W2RD2J1C',
    //environment:require('.collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', //If not specified, the file will be written to 'newman/' in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete');
}

);