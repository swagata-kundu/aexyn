import NodeMailer from 'nodemailer';
import SMTP from 'nodemailer-smtp-transport';
import * as Path from 'path';
import Fs from 'fs';
import Config from 'config';
import {
  htmlToText,
} from 'nodemailer-html-to-text';

export class MailNotifier {
  constructor() {
    this.transporter = NodeMailer.createTransport(SMTP(Config.get('mailCredential')));
    this.transporter.use('compile', htmlToText());
    this.transporter.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
    this.defaultConfig = {
      from: Config.get('fromAddress'),
      subject: '',
    };
  }

  sendVerificationMail=(data, done) => {
    this.transporter.sendMail({
      ...this.defaultConfig,
      subject: 'Aexyn | Verify Account',
      ...data,
    }, done);
  }

  sendResetPassword=({ to, link }, done) => {
    this.transporter.sendMail({
      ...this.defaultConfig,
      subject: 'Aexyn | Reset Password',
      to,
      text: link,
    }, done);
  }

  sendQualificationInviteEmail=({ to, link }, done) => {
    this.transporter.sendMail({
      ...this.defaultConfig,
      subject: 'Aexyn | Invitation',
      to,
      text: link,
    }, done);
  }
}

export default new MailNotifier();
