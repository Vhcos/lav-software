import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, isValidEmail } from "@/lib/utils";

const FROM = "LAV Systems <contacto@lav.software>";
const TO   = "vhurtado@grupohurtado.cl";

const LIMITS = {
  name: 120,
  company: 160,
  role: 120,
  sector: 120,
  companySize: 80,
  process: 160,
  email: 254,
  message: 4000,
};

function readRequiredString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) return null;
  return trimmed;
}

function readOptionalString(value: unknown, maxLength: number): string | null {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length > maxLength) return null;
  return trimmed;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  const name = readRequiredString(data.name, LIMITS.name);
  const emailRaw = readRequiredString(data.email, LIMITS.email);
  const message = readRequiredString(data.message, LIMITS.message);
  const company = readOptionalString(data.company, LIMITS.company);
  const role = readOptionalString(data.role, LIMITS.role);
  const sector = readOptionalString(data.sector, LIMITS.sector);
  const companySize = readOptionalString(data.companySize, LIMITS.companySize);
  const businessProcess = readOptionalString(data.process, LIMITS.process);

  if (
    name === null || emailRaw === null || message === null ||
    company === null || role === null || sector === null ||
    companySize === null || businessProcess === null
  ) {
    return NextResponse.json({ error: "Datos de contacto inválidos." }, { status: 400 });
  }

  const email = emailRaw.toLowerCase();
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Datos de contacto inválidos." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const safeRole = escapeHtml(role);
    const safeSector = escapeHtml(sector);
    const safeCompanySize = escapeHtml(companySize);
    const safeProcess = escapeHtml(businessProcess);

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
    console.error("[contact] send failed", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Error al enviar." }, { status: 500 });
  }
}
