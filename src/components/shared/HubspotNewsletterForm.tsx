"use client";

import Script from "next/script";

type HubspotNewsletterFormProps = {
  className?: string;
};

const HUBSPOT_PORTAL_ID = "50658554";
const HUBSPOT_REGION = "na1";
const HUBSPOT_FORM_ID = "5c92235a-1b28-45de-b33f-592297542a7a";
const HUBSPOT_EMBED_SRC = `https://js.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

const HubspotNewsletterForm = ({ className }: HubspotNewsletterFormProps) => {
  return (
    <div className={className}>
      <Script
        id="hubspot-forms-embed"
        src={HUBSPOT_EMBED_SRC}
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region={HUBSPOT_REGION}
        data-form-id={HUBSPOT_FORM_ID}
        data-portal-id={HUBSPOT_PORTAL_ID}
      />
    </div>
  );
};

export default HubspotNewsletterForm;

