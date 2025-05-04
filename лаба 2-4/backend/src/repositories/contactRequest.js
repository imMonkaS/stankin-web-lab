const { ContactRequest } = require('../models');

class ContactRequestRepository {
    async postRequest(data){
        return await ContactRequest.create(data);
    }
}

module.exports = new ContactRequestRepository();