/**
 *
 *
 * @param {*} connection
 * @return {*}
 */
const trans = 'TRANSACTION'
async function getLatestTransactionId(connection) {
    // eslint-disable-next-line max-len
    const [results] = await connection.query('SELECT transid FROM transaction WHERE countername = ?',
        [trans]);
    return results[0].transid;
}

/**
 *
 *
 * @param {*} connection
 * @param {*} transid
 */
async function incrementTransactionId(connection, transid) {
    // eslint-disable-next-line max-len
    await connection.query('UPDATE transaction SET transid = ? WHERE countername = ? ',
        [transid + 1, trans]);

}

module.exports.getLatestTransactionId = getLatestTransactionId;
module.exports.incrementTransactionId = incrementTransactionId;