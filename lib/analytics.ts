import { track } from "@vercel/analytics";

export type AnalyticsEvent =
  | "diagnostic_cta_clicked"
  | "calendly_opened"
  | "contact_form_submitted"
  | "contact_form_failed"
  | "newsletter_subscribed"
  | "founders_program_clicked"
  | "investor_page_viewed"
  | "investor_teaser_clicked"
  | "investor_meeting_clicked"
  | "investor_form_started"
  | "investor_form_submitted"
  | "investor_form_failed";

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>,
) {
  track(event, properties);
}
