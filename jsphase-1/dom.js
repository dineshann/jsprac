/** JavaScript DOM **/
/*
    ! What is DOM?
    DOM stands for Document Object Model, an interface for
    web documents that represents their structure as a 
    tree-like object. It allows dynamic manipulation of 
    page content using languages like JavaScript.
*/  
/* 
    ! What is DOM Manipulation?
    DOM manipulation refers to the process of programmatically
    modifying the content, structure, or style of a web page's
    Document Object Model(DOM) using scripting languages like
    JavaScript. Developers can add, remove, or modify elements,
    attributes, and text within the DOM to create dynamic and 
    interactive web applications. This allows web pages to respond
    to user interactions, update content dynamically, and provide
    a more engaging user experience.
*/ 

var para = document.getElementById("one")
console.log(para.textContent)
para.textContent = "Bye"

