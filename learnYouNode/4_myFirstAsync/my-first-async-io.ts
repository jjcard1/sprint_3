const fs = require('fs')

fs.readFile(process.argv[2], function(err:any, data:any) {
    if (!err) {
        const text = data.toString();
        const arraytext = text.split('\n');
        console.log(arraytext.length - 1);
    };
});

