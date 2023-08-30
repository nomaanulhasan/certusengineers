import { NextRequest, NextResponse } from "next/server";
import { mailOptions, transporter } from "@/lib/nodemailer";
import { DOMAIN_NAME } from "@/lib";

type bodyData = { msg: string; name: string; email: string };

export async function POST(request: NextRequest) {
  try {
    const { msg, name, email } = (await request.json()) as bodyData;

    if (!msg || !name || !email) {
      return NextResponse.json(
        {
          type: "error",
          message: "Kindly fill all the required fields.",
        },
        { status: 422 },
      );
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: `Contact Form: ${DOMAIN_NAME} | ${email}`,
      text: `Name: ${name}\r\nEmail: ${email}\r\nMessage: ${msg.replaceAll(
        "\n",
        "\r\n",
      )}`,
      html: `
			<h1>Name: ${name}</h1> <p>Email: ${email}</p> <p>Message: ${msg.replaceAll(
        "\n",
        "<br />",
      )}</p>`,
    });

    return NextResponse.json(
      {
        data: { msg, name, email },
        type: "success",
        message: "Message sent successfully!",
      },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        type: "error",
        message: err.message,
      },
      { status: 500 },
    );
  }
}
