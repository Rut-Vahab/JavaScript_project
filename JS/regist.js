//פונקציה עבור הרשם
function saveRegistration() {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let user = {
        name: name,
        password: password,
        phone: phone,
        email: email
    };
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    alert(`${name} Successfully registered!`);
    document.getElementById('registrationForm').reset();
}

// אם המשתמש מלא כבר פרטים -שיפיעו כבר שיכנס בפעם הבאה להרשמה
let str = sessionStorage.getItem("currentUser");
if (str) {
    let userInfo = JSON.parse(str);
    document.getElementById('name').value = userInfo.name;
    document.getElementById('password').value = userInfo.password;
    if (userInfo.email)
        document.getElementById('email').value = userInfo.email;
    else
        document.getElementById('email').value = "";
    if (userInfo.phone)
        document.getElementById('phone').value = userInfo.phone;
    else
        document.getElementById('phone').value = "";
}