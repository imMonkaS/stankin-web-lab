const ContactRequestRepository = require('../repositories/contactRequest')

class ContactRequestController {
    async postRequest(req, res) {
        try {
            const request = await ContactRequestRepository.postRequest(req.body);
            res.status(201).json(request);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ContactRequestController();
