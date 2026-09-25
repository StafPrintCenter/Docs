import { SITE, SITE_LINK } from "@/data/site";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, WhatsAppIcon } from "@/components/site/icons";

export function DocsFooter() {
  const socialLinks = [
    { label: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedinIcon },
    { label: "Facebook", href: SITE.socials.facebook, Icon: FacebookIcon },
    { label: "Instagram", href: SITE.socials.instagram, Icon: InstagramIcon },
    { label: "X", href: SITE.socials.x, Icon: XIcon },
    { label: "WhatsApp", href: SITE.whatsappLink, Icon: WhatsAppIcon },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-background/50 py-6 backdrop-blur-xs">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} SPC Docs · Documentation de{" "}
          <a
            href={SITE_LINK.landingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 transition-colors hover:text-foreground cursor-pointer"
          >
            {SITE.name}
          </a>
          .
        </p>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}