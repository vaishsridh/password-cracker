const { md5Hash } = require('./utils');

function bruteForce(hash, maxLength) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'; 

    function recurse(length, prefix) {
        for (let i = 0; i < charset.length; i++) {
            const attempt = prefix + charset[i];

            if (md5Hash(attempt) === hash) {
                console.log(`Password found: ${attempt}`);
                return true;
            }

            if (length > 0 && recurse(length - 1, attempt)) {
                return true;
            }
        }

        return false;
    }

    for (let length = 1; length <= maxLength; length++) {
        if (recurse(length - 1, '')) {
            break;
        }
    }
}

bruteForce('7a95bf926a0333f57705aeac07a362a2', 4);
bruteForce('08054846bbc9933fd0395f8be516a9f9', 4);
