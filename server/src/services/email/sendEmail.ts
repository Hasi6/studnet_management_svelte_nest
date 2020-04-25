import databaseData from "../../config/default";
import * as nodemailer from "nodemailer";

const { emailPassword } = databaseData;

class Email {
  public sendEmail = (email: string, output: string, subject: string): void => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sememories2016@gmail.com",
        pass: emailPassword
      }
    });

    const mailOptions = {
      from: "sememories2016@gmail.com",
      to: email,
      subject,
      html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log("Email sent: " + info.response);
        return;
      }
    });
  };
}

export default Email;
