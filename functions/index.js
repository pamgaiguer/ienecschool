/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
//const nodemailer = require('nodemailer');
//const sgTransport = require('@sendgrid/mail');

// Configure o SendGrid com sua chave de API
const sgMail = require('@sendgrid/mail');

// Use a chave armazenada na variável de ambiente
const sendgridKey = functions.config().sendgrid.key;
sgMail.setApiKey(sendgridKey);

exports.sendEmail = functions.https.onRequest((req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    to: 'ferosstudios@gmail.com', // Email de destino
    from: email, // Remetente
    subject: `Nova mensagem de ${name} - contact form`,
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
  };

  sgMail
    .send(mailOptions)
    .then(() => res.status(200).send('Email enviado com sucesso'))
    .catch(error => {
      console.error('Erro ao enviar email: ', error);
      res.status(500).send('Erro ao enviar o email');
    });
});
