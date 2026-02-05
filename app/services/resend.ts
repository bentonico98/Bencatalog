import { Resend } from "resend";

const SendEmailToBoss = async (
  e: {
    email: string;
    subject: string;
    message: string;
  },
  apiKey: string,
) => {
  const resend = new Resend(apiKey);
  const response = await resend.emails.send({
    from: "bentonico98@gmail.com",
    to: [e.email],
    subject: e.subject,
    html: `<strong>${e.message} - From BenCatalog</strong>`,
  });

  if (response.error) {
    throw createError({
      statusCode: 500,
      message: "Error sending email",
    });
  }

  return response;
};

export default SendEmailToBoss;
