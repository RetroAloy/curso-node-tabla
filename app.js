const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js')
    // 5 x 1 = 5
    // 5 x 2 = 10
    // ...
    // 5 x 10 = 50



console.clear();
//console.log(process.argv);
//console.log(argv);

// const base = '8';

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));