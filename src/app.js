const renderContacts = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    
    let div = document.querySelector('.contact-list');
    div.innerHTML = ''
    if (contacts) {        
        const ul = document.createElement('ul')
        ul.className = "list-reset";
        
        contacts.forEach(contact => {
            let li = document.createElement('li')
            li.innerHTML = `
                <div class="card">
                    <div class="content">
                        <h1>${ contact.name }</h1>
                        <h2>${ contact.company }</h2>
                        <p>${ contact.notes }</p>
                        ${ contact.email } |
                        <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
                    </div>
                </div>
            `
            ul.appendChild(li)
        })
        
        div.appendChild(ul)
    } else {
        div.innerHTML = `<p>You have no contacts in your address book</p>`
    }
}


document.addEventListener('DOMContentLoaded', () => {    
    renderContacts()
    const addContactForm = document.querySelector('#new-contact-form')

    //Had to use a different addeventlistener, couldn't get the other to work.
    document.getElementById("save-contact-btn").
    addEventListener("click", function() {

        let clearMessage = document.querySelector('#new-contact-form');
        //clearMessage.innerHTML = "" //deletes all the fields in the form.. 

        event.preventDefault()        
    
        const contact ={
            id: Date.now(),
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            company: document.getElementById("company").value,
            notes: document.getElementById("notes").value,
            twitter: document.getElementById("twitter").value,
        }
        //emptying the fields after use. 
        document.getElementById("name").value = "";
        document.getElementById("email").value = "",
        document.getElementById("phone").value = "";
        document.getElementById("company").value = "";
        document.getElementById("notes").value = "";
        document.getElementById("twitter").value = "";

        /**old code */

        // const{
        //     name,
        //     email,
        //     phone,
        //     company,
        //     notes,
        //     twitter,
        // } = addContactForm.elements

        // const contact ={
        //     id: Date.now(),
        //     name: name.value,
        //     email: email.value,
        //     phone: phone.value,
        //     company: company.value,
        //     notes: notes.value,
        //     twitter: twitter.value,
        // }

        console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []
        contacts.push(contact)
        localStorage.clear();//cleaning in between uses
        localStorage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
    })
})
