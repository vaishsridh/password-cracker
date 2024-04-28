# Password Cracker

This project is a simple password cracker built in Node.js. It is inspired by the John the Ripper and CrackStation password cracking tools. The project provides an interesting way of learning several different things about password cracking.

The project is inspired by the John Crickett coding challenge and is implemented in JavaScript.

## Getting Started

Before running the scripts, you need to download a wordlist file. We recommend using the smaller wordlist from CrackStation, which can be downloaded from here. After downloading, place the `.gz` file in the root directory of the project.

## Files

### utils.js

This file contains a utility function `md5Hash(password)` that generates an MD5 hash of a given password. This function is used by other scripts in the project to hash passwords.

### bruteForce.js

This file contains a function `bruteForce(hash, maxLength)` that attempts to crack a given hash by brute force. It tries all possible combinations of a given character set up to a specified maximum length.

### rainbowTableGenerator.js

This file contains a function `rainbowTableGenerator(hash, wordListPath, rainbowTablePath)` that generates a rainbow table from a given word list. The rainbow table is a precomputed table for reversing cryptographic hash functions.

### rainbowTableCracker.js

This file contains a function `crackPassword(hash, rainbowTablePath)` that attempts to crack a given hash by looking it up in a precomputed rainbow table.

### wordListCracker.js

This file contains a function `wordListCracker(hash, wordListPath)` that attempts to crack a given hash by looking it up in a word list.

## Usage

To use this project, clone the repository and run the desired script with Node.js. For example, to use the brute force script, you would run:

```bash
node bruteForce.js
