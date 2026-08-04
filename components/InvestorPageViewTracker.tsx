"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function InvestorPageViewTracker() {
  useEffect(() => {
    trackEvent("investor_page_viewed");
  }, []);

  return null;
}
