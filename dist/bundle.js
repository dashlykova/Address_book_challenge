!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=function(){var e=JSON.parse(localStorage.getItem("contacts")),t=document.querySelector(".contact-list");if(t.innerHTML="",e){var n=document.createElement("ul");n.className="list-reset",e.forEach(function(e){var t=document.createElement("li");t.innerHTML='\n                <div class="card">\n                    <div class="content">\n                        <h1>'+e.name+"</h1>\n                        <h2>"+e.company+"</h2>\n                        <p>"+e.notes+"</p>\n                        "+e.email+' |\n                        <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a>\n                    </div>\n                </div>\n            ",n.appendChild(t)}),t.appendChild(n)}else t.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",function(){o();document.querySelector("#new-contact-form");document.getElementById("add-contact").addEventListener("click",function(){var e=document.getElementById("new-contact-form");"none"===e.style.display?e.style.display="block":e.style.display="none"}),document.getElementById("save-contact-btn").addEventListener("click",function(){document.querySelector("#new-contact-form");event.preventDefault();var e={id:Date.now(),name:document.getElementById("contact-name").value,email:document.getElementById("contact-email").value,phone:document.getElementById("contact-phone").value,company:document.getElementById("contact-company").value,notes:document.getElementById("contact-notes").value,twitter:document.getElementById("contact-twitter").value};document.getElementById("contact-name").value="",document.getElementById("contact-email").value="",document.getElementById("contact-phone").value="",document.getElementById("contact-company").value="",document.getElementById("contact-notes").value="",document.getElementById("contact-twitter").value="",console.log("Saving the following contact: "+JSON.stringify(e));var t=JSON.parse(localStorage.getItem("contacts"))||[];t.push(e),localStorage.clear(),localStorage.setItem("contacts",JSON.stringify(t)),o()})})}]);