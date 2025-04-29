

//פונקציה דומה עבור התחברות
function saveRegistration1() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    let user = {
        name: name,
        password: password,
    };
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    alert(`${name} Successfully registered!`);
    document.getElementById('registrationForm').reset();
}
// אם המשתמש מלא כבר פרטים -שיפיעו כבר שיכנס בפעם הבאה להרשמה
let str = sessionStorage.getItem("currentUser");
if (str) {
    let userInfo = JSON.parse(str);
    document.getElementById('name').value =userInfo.name ; 
    document.getElementById('password').value =userInfo.password ; 
}

