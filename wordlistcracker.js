const { md5Hash } = require('./utils');
const fs = require('fs');
const readline = require('readline');
const zlib = require('zlib');

function wordListCracker(hash, wordListPath) {
    const fileStream = fs.createReadStream(wordListPath);
    const gzip = zlib.createGunzip();
    const rl = readline.createInterface({
        input: fileStream.pipe(gzip),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        if (md5Hash(line) === hash) {
            console.log(`Password found: ${line}`);
            rl.close();
        }
    });
}

wordListCracker('2bdb742fc3d075ec6b73ea414f27819a', './crackstation-human-only.txt.gz');
