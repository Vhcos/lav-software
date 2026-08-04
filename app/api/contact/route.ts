import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/utils";

const FROM = "LAV Systems <contacto@lav.software>";
const TO   = "vhurtado@grupohurtado.cl";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, email, message, role, sector, companySize, process: businessProcess } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeCompany = company ? escapeHtml(company) : "";
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const safeRole = role ? escapeHtml(role) : "";
    const safeSector = sector ? escapeHtml(sector) : "";
    const safeCompanySize = companySize ? escapeHtml(companySize) : "";
    const safeProcess = businessProcess ? escapeHtml(businessProcess) : "";

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Contacto LAV Systems — ${safeCompany || safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8f9fa;border-radius:12px;">
          <h2 style="color:#0c1f35;margin-bottom:8px;">Nuevo mensaje de contacto</h2>
          <p style="color:#64748b;margin-bottom:24px;font-size:14px;">Recibido desde lav.software</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:120px;">Nombre</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;font-weight:600;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Cargo</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeRole || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Empresa</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeCompany || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Sector</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeSector || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Tamaño</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeCompanySize || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Proceso</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeProcess || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Email</td><td style="padding:8px 0;color:#0891b2;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#0891b2;">${safeEmail}</a></td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#fff;border-radius:8px;border-left:3px solid #0891b2;">
            <p style="color:#64748b;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">Mensaje</p>
            <p style="color:#0c1f35;font-size:14px;line-height:1.6;margin:0;">${safeMessage}</p>
          </div>
          <p style="margin-top:24px;color:#94a3b8;font-size:12px;">lav.software · Plataforma empresarial modular con agentes de IA especializados</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Error al enviar." }, { status: 500 });
  }
}
