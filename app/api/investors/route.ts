import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, isValidEmail, isValidHttpUrl, sanitizeEmailHeader } from "@/lib/utils";
import { ORGANIZATION_TYPES, INVESTMENT_RANGES, INVESTMENT_STAGES, GEOGRAPHIES } from "@/lib/investor-options";

const FROM = "LAV Systems <contacto@lav.software>";
const TO   = "vhurtado@grupohurtado.cl";

// Respuesta automática al inversionista: implementada pero desactivada hasta confirmar
// deliverability del dominio para envíos salientes fuera del flujo interno ya validado.
const SEND_AUTO_REPLY = false;

const LIMITS = {
  firstName: 120,
  lastName: 120,
  organization: 180,
  role: 120,
  email: 254,
  website: 300,
  organizationType: 120,
  investmentRange: 120,
  investmentStage: 100,
  geography: 120,
  thesis: 800,
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

function readOptionalEnum(value: unknown, maxLength: number, allowed: readonly string[]): string | null {
  const result = readOptionalString(value, maxLength);
  if (result === null || result === "") return result;
  return allowed.includes(result) ? result : null;
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

  const firstName = readRequiredString(data.firstName, LIMITS.firstName);
  const lastName = readRequiredString(data.lastName, LIMITS.lastName);
  const emailRaw = readRequiredString(data.email, LIMITS.email);
  const organization = readOptionalString(data.organization, LIMITS.organization);
  const role = readOptionalString(data.role, LIMITS.role);
  const organizationType = readOptionalEnum(data.organizationType, LIMITS.organizationType, ORGANIZATION_TYPES);
  const websiteRaw = readOptionalString(data.website, LIMITS.website);
  const investmentRange = readOptionalEnum(data.investmentRange, LIMITS.investmentRange, INVESTMENT_RANGES);
  const investmentStage = readOptionalEnum(data.investmentStage, LIMITS.investmentStage, INVESTMENT_STAGES);
  const geography = readOptionalEnum(data.geography, LIMITS.geography, GEOGRAPHIES);
  const thesis = readOptionalString(data.thesis, LIMITS.thesis);
  const message = readOptionalString(data.message, LIMITS.message);
  const consent = data.consent === true;

  if (
    firstName === null || lastName === null || emailRaw === null ||
    organization === null || role === null || organizationType === null ||
    websiteRaw === null || investmentRange === null || investmentStage === null ||
    geography === null || thesis === null || message === null
  ) {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: "Se requiere consentimiento." }, { status: 400 });
  }

  const email = emailRaw.toLowerCase();
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const website = websiteRaw && !isValidHttpUrl(websiteRaw) ? null : websiteRaw;
  if (website === null) {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeOrganization = escapeHtml(organization);
    const safeRole = escapeHtml(role);
    const safeOrganizationType = escapeHtml(organizationType);
    const safeWebsite = escapeHtml(website);
    const safeInvestmentRange = escapeHtml(investmentRange);
    const safeInvestmentStage = escapeHtml(investmentStage);
    const safeGeography = escapeHtml(geography);
    const safeThesis = escapeHtml(thesis).replace(/\n/g, "<br>");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const receivedAt = new Date().toISOString();

    const subjectSource = organization || `${firstName} ${lastName}`;
    const subject = `Nuevo contacto de inversión LAV — ${sanitizeEmailHeader(subjectSource)}`;

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8f9fa;border-radius:12px;">
          <h2 style="color:#0c1f35;margin-bottom:8px;">Nuevo contacto de inversión</h2>
          <p style="color:#64748b;margin-bottom:24px;font-size:14px;">Recibido desde lav.software/inversionistas · ${receivedAt}</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;">Nombre</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;font-weight:600;">${safeFirstName} ${safeLastName}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Email</td><td style="padding:8px 0;color:#0891b2;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#0891b2;">${safeEmail}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Organización</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeOrganization || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Cargo</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeRole || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Tipo de organización</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeOrganizationType || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Sitio web</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeWebsite || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Rango de inversión</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeInvestmentRange || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Etapa</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeInvestmentStage || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Foco geográfico</td><td style="padding:8px 0;color:#0c1f35;font-size:14px;">${safeGeography || "—"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#fff;border-radius:8px;border-left:3px solid #0891b2;">
            <p style="color:#64748b;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">Tesis o sectores de interés</p>
            <p style="color:#0c1f35;font-size:14px;line-height:1.6;margin:0;">${safeThesis || "—"}</p>
          </div>
          <div style="margin-top:16px;padding:20px;background:#fff;border-radius:8px;border-left:3px solid #0891b2;">
            <p style="color:#64748b;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">Mensaje</p>
            <p style="color:#0c1f35;font-size:14px;line-height:1.6;margin:0;">${safeMessage || "—"}</p>
          </div>
          <p style="margin-top:24px;color:#94a3b8;font-size:12px;">lav.software · Plataforma empresarial modular con agentes de IA especializados</p>
        </div>
      `,
    });

    if (SEND_AUTO_REPLY) {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Gracias por tu interés en LAV Systems",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8f9fa;border-radius:12px;">
            <p style="color:#0c1f35;font-size:14px;line-height:1.6;">Gracias por tu interés en LAV Systems. Recibimos tus antecedentes y los revisaremos para evaluar compatibilidad con la etapa y estrategia de la compañía. Si existe encaje, coordinaremos una conversación y compartiremos información adicional.</p>
            <p style="margin-top:24px;color:#94a3b8;font-size:12px;">lav.software</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[investors] send failed", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Error al enviar." }, { status: 500 });
  }
}
