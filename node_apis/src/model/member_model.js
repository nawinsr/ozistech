const db = require("../db");
const constants = require("../constants");
const transaction = require("./transaction");

async function insertMemberData(name, mobile, dob, address, membership) {
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let success = false;

    try {
        const transid = await transaction.getLatestTransactionId(connection);

        const insertData = {
            name,
            mobile,
            dob,
            address,
            membership
        }

        await connection.query('INSERT INTO member_data SET ? ', [insertData]);
        await transaction.incrementTransactionId(connection, transid);
        await connection.commit();
        success = true
    } catch (error) {
        console.log(error);
        await connection.rollback();
    }

    connection.release();
    return success;
}


async function getAllMembersData() {

    const connection = await db.getConnection();
    try {
        let sqlQuery = `SELECT * FROM member_data ORDER BY created_at DESC`;

        const [res01] = await connection.query(sqlQuery);
        connection.release();

        if (res01 && res01[0])
            return res01;

        return null;
    } catch (error) {;
        console.log(error);
        await connection.rollback();
    }
    return "error";
}


async function getMember(id) {

    const connection = await db.getConnection();
    try {
        let sqlQuery = `SELECT * FROM member_data WHERE id = ?`;

        const [res01] = await connection.query(sqlQuery, [id]);
        connection.release();

        if (res01 && res01[0])
            return res01[0];

        return null;
    } catch (error) {

        console.log(error);
        await connection.rollback();
    }
    return "error";
}

async function putMember(name, mobile, dob, address, membership, id) {
    const connection = await db.getConnection();
    await connection.beginTransaction();
    let success = false;

    try {
        const transid = await transaction.getLatestTransactionId(connection);

        const memberData = {
            name,
            mobile,
            dob,
            address,
            membership
        }
        await connection.query('UPDATE member_data set ? WHERE id=?', [memberData, id]);
        await transaction.incrementTransactionId(connection, transid);
        await connection.commit();
        success = true;
    } catch (error) {
        console.log(error);
        await connection.rollback();
    }

    connection.release();
    return success;
}

async function deleteMember(id) {
    let success = false;
    try {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM member_data WHERE id = ? ', [id]);
        connection.release();
        success = true;
    } catch (error) {
        console.log(error);
    }
    return success;
}
module.exports.insertMemberData = insertMemberData
module.exports.getAllMembersData = getAllMembersData
module.exports.putMember = putMember
module.exports.getMember = getMember
module.exports.deleteMember = deleteMember