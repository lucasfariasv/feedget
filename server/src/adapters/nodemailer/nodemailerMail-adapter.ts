import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "13de38dc4ba1cd",
    pass: "dc60d42cac5dbe"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body } : SendMailData) {
        await transport.sendMail({
            from: 'Equipe feedget <oi@feedget.com>',
            to: 'Lucas Vieira <meuemail@gmail.com>',
            subject,
            html: body,
        });

    }

}