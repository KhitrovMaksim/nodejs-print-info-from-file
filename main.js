'use strict'

const { createReadStream } = require('fs')
const { createInterface } = require('readline')


const processFileLineByLine = async (fileName) => {
    const file = createReadStream(fileName)
    let lineCounter = 1

    const readline = createInterface({
        input: file,
        crlfDelay: Infinity,
    })

    for await (const line of readline) {
        console.log(`${lineCounter}. ${line}`)
        lineCounter += 1
    }
}

processFileLineByLine('countries.txt').catch(console.error)
