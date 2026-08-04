import { track } from "@vercel/analytics";

export type AnalyticsEvent =
  | "diagnostic_cta_clicked"
  | "calendly_opened"
  | "contact_form_submitted"
  | "contact_form_failed"
  | "newsletter_subscribed"
  | "founders_program_clicked";

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>,
) {
  track(event, properties);
}
