import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'enaema.com', // SMTP host smtp.privateemail.com
    port: 465, // SMTP port for SSL/TLS
    secure: true, // Use SSL/TLS
    auth: {
      user: 'career@enaema.com', // Your email address (career@enaema.com)
      pass: 'Gg=wXAqP-uFX', // Your email password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.email_id_send_after_submission_form,
      to,
      subject: 'Application Received',
      text: 'Hello, we have received your application',
      html,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
