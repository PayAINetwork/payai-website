"use client";

import { useEffect, useRef } from "react";

/**
 * Ghost's official embeddable signup form, pointed at the Ghost site.
 *
 * Ghost(Pro) does not expose Portal at /public/portal.min.js, so this uses the
 * supported cross-domain embed instead. Signups land in the same members list
 * the blog has always used, so the migration off the subdomain does not touch
 * the newsletter.
 *
 * Injected imperatively rather than as JSX or next/script for two reasons: the
 * bundle throws if `document.currentScript` is null, which rules out
 * next/script's dynamic injection, and a server-rendered <script> tag would not
 * execute at all on a client-side navigation into the blog.
 */

const SIGNUP_FORM_SRC =
  "https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js";

const GHOST_SITE = (
  process.env.NEXT_PUBLIC_GHOST_URL || "https://payai.ghost.io"
).replace(/\/+$/, "");

export function NewsletterSignup({
  title = "Stay ahead of agentic payments",
  description = "New posts on x402, agent payments, and the machine economy — straight to your inbox.",
}: {
  title?: string;
  description?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = container.current;
    // Strict Mode runs effects twice in development; only ever mount one form.
    if (!host || host.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = SIGNUP_FORM_SRC;
    script.async = true;
    script.dataset.site = GHOST_SITE;
    script.dataset.locale = "en";
    script.dataset.title = title;
    script.dataset.description = description;
    script.dataset.backgroundColor = "#FFFFFF";
    script.dataset.textColor = "#09090B";
    script.dataset.buttonColor = "#1D45D8";
    script.dataset.buttonTextColor = "#FFFFFF";

    host.appendChild(script);

    return () => {
      host.replaceChildren();
    };
  }, [title, description]);

  return (
    <section
      aria-label="Newsletter signup"
      className="border-y border-[#EDEDED] bg-[#F8F9FF]"
    >
      <div className="container-payai py-10 lg:py-16">
        {/*
          Reserves the form's height so the surrounding layout does not shift
          when the embed mounts — a visible bounce on the site's most-linked
          pages would be a self-inflicted Core Web Vitals problem.
        */}
        <div ref={container} className="mx-auto max-w-[42rem] min-h-[220px]" />
      </div>
    </section>
  );
}
