/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import { https } from 'firebase-functions';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail', // ou outro serviço de email
  auth: {
    user: 'ferosstudio@gmail.com',
    pass: 'sua_senha_de_app',
  },
});

export const sendEmail = https.onRequest((req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'relacionamento@colegioienec.com',
    subject: `Nova mensagem de ${name} - Form Contato Site`,
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error('Erro ao enviar email: ', error);
      console.info('Erro ao enviar email: ', info);
      return res.status(500).send('Erro ao enviar o email');
    }
    return res.status(200).send('Email enviado com sucesso');
  });
});
