import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY ?? process.env.NUXT_RESEND_API_KEY,
);
const adminEmail = process.env.NUXT_SENDER_EMAIL;

export default defineEventHandler(async (ev) => {
  const e = await readBody(ev);

  await new Promise((res) => setTimeout(res, 3000));

  const response = await resend.emails.send({
    from: `${adminEmail}`,
    to: [e.email],
    subject: e.subject,
    html: `<strong>${e.message} - From BenCatalog</strong>`,
  });

  if (response.error) {
    return {
      data: response.data,
      error: response.error,
    };
  }

  return response;
});
