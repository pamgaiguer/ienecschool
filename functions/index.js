/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const sendgridKey = functions.config().sendgrid.key;
sgMail.setApiKey(sendgridKey);

exports.sendEmail = functions.https.onRequest((req, res) => {
  const { name, email, phone, message } = req.body;

  const msg = {
    to: 'ferosstudio@gmail.com', // Email de destino
    from: 'ferosstudio@gmail.com', // Remetente
    subject: `Nova mensagem de ${name} - contact form`,
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('Email enviado com sucesso');
    })
    .catch(error => {
      console.error('Erro ao enviar o email:', error);
      res.status(500).send('Erro ao enviar o email');
    });
});
