const fs = require('fs');
const colors = require('colors');
/*const crearArchivo = (base = 5) => {
    console.log('===================');
    console.log(`   Tabla del ${base}     `);
    console.log("===================");

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida)
    console.log(`tabla-${base}.txt creada`);
};*/

/*const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log('===================');
        console.log(`   Tabla del ${base}     `);
        console.log("===================");

        let salida = '';
        const nombreArchivo = `tabla-${base}.txt`;

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        (salida) ? resolve(nombreArchivo): reject('Ocurrió un error');
    });
};*/

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += (base + " x ".cyan + i + " = ".magenta + (base * i) + "\n");
        }

        if (listar) {
            console.log("===================".magenta);
            console.log(`   Tabla del ${base}     `.rainbow.underline);
            console.log("===================".magenta);
            console.log(consola.bgYellow);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt creada`.random;
    } catch (err) {
        throw err;
    }


};

module.exports = {
    crearArchivo //crearArchivo: crearArchivo
};