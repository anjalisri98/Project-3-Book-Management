///////////////// [ FIELD VALIDATION ] /////////////////
const isValid = function (value) {
    if (typeof value === "undefined" || typeof value === "null") return false
    if (typeof value === "string" && value.trim().length == 0) return false
    return true
}

//********************** [ REQUEST BODY VALIDATION ] ******************//
const isValidReqBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
//************************[mobile validation]************************//
const isValidPhone = function (Phone) {
    const mobileRegex = /^[6-9]\d{9}$/
    return mobileRegex.test(Phone)
}
//************************[title validation]**************************//
const isValidTitle = function (title) {
    return ['Mr', 'Mrs', 'Miss'].indexOf(title) !== -1
}

//*********************[name validation]******************************//
const isValidName = function (name) {
    const nameRegex = /^[a-zA-Z ]{2,30}$/
    return nameRegex.test(name)
}
//******************[ EMAIL VALIDATION ] ********************//
const isValidEmail = function (email) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);  // returns a boolean 
}

//*****************[password validation]**********************//
//const isValidPassword = function (password) {
    //const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,15}$/
   // return passwordRegex.test(password)
//}



module.exports = { isValid, isValidReqBody, isValidTitle, isValidName, isValidPhone, isValidEmail}


/*

}




module.exports = { isValidEmail, isValidPassword, isValid, isValidName, isValidTitle, isValidPhone, isValidRequest }
*/
// ///////////////// [ URL VALIDATION ] /////////////////
// const isValidURL = function (url) {
//     let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
//     return !!pattern.test(url);
// }