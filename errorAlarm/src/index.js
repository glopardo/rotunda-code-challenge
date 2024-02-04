//  declare a global variable to count the errors
//  declare a global variable with the time of the last alert email sent
//  every time there's an error:
//      - increment the counter
//      - validate if the amount of errors (the counter) is greater than 10 and the difference of time of the last
//      error and the last alert email sent is lower than one hour
//      - if so, send the email with the alert, reset the error counter to zero, set the time of the last email sent
//      with the time of the last error
//  something like this ->

let errorCounter = 0
let timeOfLastEmailSent = null

export function logError(error) {
    // writing the error to a file logic...

    errorCounter++
    const now = new Date()

    if (errorCounter > 10 && (!timeOfLastEmailSent || (now - timeOfLastEmailSent) > 60000)) {
        sendEmailAlert()
        errorCounter = 0
        timeOfLastEmailSent = now
    }
}

