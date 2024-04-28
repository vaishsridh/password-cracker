const fs = require('fs');
const readline = require('readline');
const zlib = require('zlib');
const path = require('path');

function crackPassword(hash, rainbowTablePath) {
    const fileStream = fs.createReadStream(rainbowTablePath);
    const gunzip = zlib.createGunzip();
    const rl = readline.createInterface({
        input: fileStream.pipe(gunzip),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        const [hashFromFile, password] = line.split(' ');

        if (hashFromFile === hash) {
            console.log(`Password found: ${password}`);
            rl.close();
        }
    });
}

crackPassword('2bdb742fc3d075ec6b73ea414f27819a', './output/rainbowTable.gz');
