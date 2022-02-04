const bcrypt = require('bcrypt');


function hash(myPlaintextPassword) {
    const saltRounds = 12;
    return bcrypt.hashSync(myPlaintextPassword, saltRounds);
}

function compare(myPlaintextPassword, hash) {
    return bcrypt.compareSync(myPlaintextPassword, hash); // true
}

module.exports.hash = hash;
module.exports.compare = compare;