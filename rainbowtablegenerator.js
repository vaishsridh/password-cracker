const { md5Hash } = require('./utils');
const fs = require('fs');
const readline = require('readline');
const zlib = require('zlib');
const path = require('path');

const outputDir = './output';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

function rainbowTableGenerator(hash, wordListPath, rainbowTablePath) {
    const fileStream = fs.createReadStream(wordListPath);
    const gzip = zlib.createGunzip();
    const rl = readline.createInterface({
        input: fileStream.pipe(gzip),
        crlfDelay: Infinity
    });

    const writeStream = fs.createWriteStream(rainbowTablePath);

    rl.on('line', (line) => {
        const hash = md5Hash(line);
        writeStream.write(`${hash} ${line}\n`);
    });

    rl.on('close', () => {
        writeStream.end();
        const gzip = zlib.createGzip();
        const source = fs.createReadStream(rainbowTablePath);
        const destination = fs.createWriteStream(path.join(outputDir, 'rainbowTable.gz'));

        source.pipe(gzip).pipe(destination).on('finish', function() {
            fs.unlinkSync(rainbowTablePath); // delete the .txt file after compression
        });
    });
}

rainbowTableGenerator('2bdb742fc3d075ec6b73ea414f27819a', './crackstation-human-only.txt.gz', path.join(outputDir, 'rainbowTable.txt'));
