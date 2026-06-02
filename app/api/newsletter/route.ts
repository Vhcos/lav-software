import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const AUDIENCE_ID = "00821f58-5245-48dd-8343-9a0abe55c702";
const FROM        = "LAV Systems <contacto@lav.software>";
const TO          = "vhurtado@grupohurtado.cl";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email requerido." }, { status: 400 });
    }

    // 1. Add to Resend Audience (the list)
    await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
      unsubscribed: false,
    });

    // 2. Notify by email
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: "Nueva suscripción newsletter LAV Systems",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8f9fa;border-radius:12px;">
          <h2 style="color:#0c1f35;margin-bottom:8px;">Nueva suscripción al newsletter</h2>
          <p style="color:#64748b;margin-bottom:24px;font-size:14px;">Recibido desde lav.software</p>
          <div style="padding:20px;background:#fff;border-radius:8px;border-left:3px solid #0891b2;">
            <p style="color:#64748b;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">Email suscrito</p>
            <p style="color:#0891b2;font-size:16px;font-weight:600;margin:0;">
              <a href="mailto:${email}" style="color:#0891b2;">${email}</a>
            </p>
          </div>
          <p style="margin-top:24px;color:#94a3b8;font-size:12px;">lav.software · Software inteligente a medida para empresas</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter]", err);
    return NextResponse.json({ error: "Error al suscribir." }, { status: 500 });
  }
}
