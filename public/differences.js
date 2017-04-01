require('colors')
var jsdiff = require('diff');


//Construct a diffLines object in note.html based on the two args, which should be sent to us from the server
//var diff = jsdiff.diffLines(one, other);


//
diff.forEach(function(part){
  // green for additions, red for deletions
  // grey for common parts
  var color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  process.stderr.write(part.value[color]);
});

console.log()
