function isInvalidEmail(userObj){
    return !userObj.email.includes("@")
}

function correctLength(userObj){
    return Object.keys(userObj).length === 0
}

module.export = {
    isInvalidEmail,
    correctLength
}