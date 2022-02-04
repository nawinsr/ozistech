const memberModel = require("../model/member_model.js");
async function createMember(req, res) {
    const { name, mobile, dob, address } = req.body;

    let success = await memberModel.insertMemberData(name, mobile, dob, address, 0);
    return success === true ? res.status(201).json("Member created") : res.status(400).send(req.body);
}

async function getAllMembers(req, res) {

    const result = await memberModel.getAllMembersData();
    return result == "error" ? res.status(400).json(constants.wrong) : res.status(200).json(result);

}

async function getMember(req, res) {
    const { id } = req.params
    const result = await memberModel.getMember(id);
    return result == "error" ? res.status(400).json(constants.wrong) : res.status(200).json(result);
}

async function putMember(req, res) {
    const { id } = await req.params;
    const {
        name,
        mobile,
        dob,
        address,
        membership,
    } = req.body;

    const success = await memberModel.putMember(name, mobile, dob, address, membership, id);
    return success == true ? res.status(200).json("Member updated successfully") : res.status(400).send(req.body)
}
async function deleteMember(req, res) {
    const { id } = await req.params;

    const success = await memberModel.deleteMember(id);
    return success == true ? res.status(200).json("Template Deleted Successfully") : res.status(400).json(constants.wrong)
}


module.exports.putMember = putMember
module.exports.getMember = getMember
module.exports.getAllMembers = getAllMembers
module.exports.createMember = createMember
module.exports.deleteMember = deleteMember