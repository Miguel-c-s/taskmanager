const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'email@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along with us.`
    })
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'email@gmail.com',
        subject: `Goodbye ${name}`,
        text: `Sad to see you go. Hope to get you coming back any time soon!`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}