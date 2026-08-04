"use client";

import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  event: AnalyticsEvent;
  eventProperties?: Record<string, string | number | boolean>;
};

export function TrackedLink({ event, eventProperties, onClick, ...anchorProps }: TrackedLinkProps) {
  return (
    <a
      {...anchorProps}
      onClick={(e) => {
        trackEvent(event, eventProperties);
        onClick?.(e);
      }}
    />
  );
}
