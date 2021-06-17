// make all service calls regarding a contact object


class ContactService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    // 1: Read/Index action 

    getContacts(){
        fetch(`${this.endpoint}/contacts`)
        .then(resp => resp.json())
        .then(contacts => {
            for (const contact of contacts){
                const c = new Contact(contact)
                c.slapOnDom()
            }
        })
    }

    createContact(){
        const contact = {
            name: document.getElementById('name').value,
            number: document.getElementById('number').value,
            email: document.getElementById('email').value,
            category_id: 1
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(contact)
        }

        fetch(`${this.endpoint}/contacts`, configObj)
        .then(resp => resp.json())
        .then(contact => {
            const c = new Contact(contact)
            c.slapOnDom()
        })
    }

    deleteContact(id){
        fetch(`${this.endpoint}/contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}


