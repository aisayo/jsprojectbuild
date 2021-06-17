class Contact {
    // remember objects 
    static all = []
    static contactsContainer = document.getElementById("contacts-container")
    static contactForm = document.getElementById('form-container')
    
    constructor({id, name, number, email, category_id}){
        this.id = id
        this.name = name 
        this.number = number
        this.email = email
        this.category_id = category_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `contact-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Contact.all.push(this)
    }

    contactHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.number} - ${this.email}</p>
            </div>
            <button id='delete-bttn'>Delete</button>
            <br>
            <br>
        `
        return this.element
    }

    slapOnDom(){
        Contact.contactsContainer.append(this.contactHTML())
    }

    static renderForm(){
        Contact.contactForm.innerHTML += `
        <form id="new-contact-form">
            Name: <input type="text" id="name">
            Number: <input type="text" id="number">
            Email: <input type="text" id="email">
            <input type="submit" id="create">
        <form>
        `
    }


    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            contactService.deleteContact(this.id)
        }
    }


}