
var blog = document.getElementById('blog');
var blur = document.getElementById('blur');

blur.addEventListener("click", function(){
     if (blur.style.display = "none") {
             blog.style.display = "block";
         } else {
             blog.style.display = "none";
       }
});
var bmf = document.getElementById('bmf');
var blue = document.getElementById('blue');
blue.addEventListener("click", function(){
     if (blue.style.display = "none") {
             bmf.style.display = "block";
         } else {
             bmf.style.display = "none";
       }
});



var wor = document.getElementById('wor');
var edu = document.getElementById('edu');
var work = document.getElementById('work');
var education = document.getElementById('education');

work.addEventListener("click", function(){
    if(edu.style.display = 'none'){
        wor.style.display = 'block'
    }else {
        wor.style.display = "none"
    }
})
education.addEventListener("click", function(){
    if(wor.style.display = 'none'){
        edu.style.display = 'block'
    }else {
        edu.style.display = "none"
    }
})


// form
function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "udechukwu1406@student.babcock.edu.ng",
    Password : "8E423AE0700BFC6E8548501B581BC52CED0A",
    From : 'udechukwu1406@student.babcock.edu.ng',
    To : document.getElementById("email").value,
    Subject : "form",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert(message)
);
}

