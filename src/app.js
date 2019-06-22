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

    //toggle the input field for new contacts
    // document.getElementById("add-contact").addEventListener("click", function()
    // {
    //     let form = document.getElementById("new-contact-form");    
    //     if (form.style.display === "none") 
    //     { 
    //       form.style.display = "block";
    //     } else { 
    //      form.style.display = "none";
    //     } 
    // })    

    //Had to use a different addeventlistener, couldn't get the other to work.
    document.getElementById("save-contact-btn").
    addEventListener("click", function() {

        let clearMessage = document.querySelector('#new-contact-form');
        event.preventDefault()        
    
        const contact ={
            id: Date.now(),
            name: document.getElementById("contact-name").value,
            email: document.getElementById("contact-email").value,
            phone: document.getElementById("contact-phone").value,
            company: document.getElementById("contact-company").value,
            notes: document.getElementById("contact-notes").value,
            twitter: document.getElementById("contact-twitter").value,
        }
        //emptying the fields after use. 
        document.getElementById("contact-name").value = "";
        document.getElementById("contact-email").value = "",
        document.getElementById("contact-phone").value = "";
        document.getElementById("contact-company").value = "";
        document.getElementById("contact-notes").value = "";
        document.getElementById("contact-twitter").value = "";

        console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []
        contacts.push(contact)
        localStorage.clear();//cleaning in between uses
        localStorage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
    })
})
