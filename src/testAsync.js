console.log('--------------Test Async-------------------------')


const promise= Promise.resolve(20)

promise.then(data => {
    console.log('promise resolved with data', data)
})


const person = {fname: 'maria', lname: 'turzynsk'}


const collection = {
    fname: 'maria',
    lname: 'wojciechowska',
    ssn: 111,
    dob: '01/01/2021',
    [Symbol.iterator] () {
        let values = Object.values(this)
        let i = 0
        return {
            next: () => {
                return ({
                    value: values[i++],
                    done: i > values.length
                })
            }
        }
    }
}

for(const value of collection) {
    console.log('value is ', value)
}


let test = null


console.log('here...', test ?? 'correct')

