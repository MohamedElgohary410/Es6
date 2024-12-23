var data = {
    fname: 'Ahmed',
    age: 22,
    address: 'alex'
}

var newData = new Proxy(data, {
    set: (object, property, value) => {
        if (property === 'fname') {
            if (typeof value !== 'string' || value.length !== 7) {
                throw new Error('Name must be a string of exactly 7 characters');
            }
        } else if (property === 'age') {
            if (typeof value !== 'number' || value < 25 || value > 60) {
                throw new Error('Age must be a number between 25 and 60');
            }
        } else if (property === 'address') {
            if (typeof value !== 'string') {
                throw new Error('Address must be a string');
            }
        }
        else {
            throw new Error(`Invalid property: ${property}`);
        }
        object[property] = value;
        return true
    }
})

try {
    newData.fname = 'mohamed'
    newData.age = 25;
    newData.address = 'Tanta'
    console.log(newData)
} catch (error) {
    console.log(error);

}