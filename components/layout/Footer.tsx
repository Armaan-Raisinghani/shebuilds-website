import Image from "next/image";
import Link from "next/link";
import footerData from "@/public/data/footer.json";

const siteMapLinks = footerData.siteMapLinks;
const contactInfo = footerData.contactInfo;
const partnerLogos = footerData.partnerLogos;

export function Footer() {
  return (
    <footer className="w-full bg-teal-900 pt-16 pb-8">
      <div className="w-full px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 py-8">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div className="flex flex-col max-w-xl gap-7">
            <div className="flex flex-col max-w-sm gap-4">
              <h2 className="text-white font-montserrat font-medium text-3xl tracking-tight leading-8">
                SheBuildsAI
              </h2>

              <p className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5">
                An ecosystem for women in AI and deep tech spotlighting leaders
                and innovators, surfaces insights and trends, and expands access
                to opportunities, scholarships, and resources
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {partnerLogos.map((logo, index) => (
                  <Image
                    key={index}
                    className="object-contain"
                    width={logo.width}
                    height={logo.height}
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>

              <div className="flex flex-col items-start">
                <p className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5">
                  Partners
                </p>
                <Image
                  className="w-18 h-8"
                  width={74}
                  height={31}
                  alt="Partner logo"
                  src="https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-10.png"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <nav className="flex flex-col w-44 gap-4">
              <h3 className="font-montserrat font-medium text-white text-base tracking-normal leading-relaxed">
                Site Map
              </h3>

              <ul className="flex flex-col gap-3">
                {siteMapLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="flex flex-col w-44 gap-4 not-italic">
              <h3 className="font-montserrat font-medium text-white text-base tracking-normal leading-relaxed">
                Contact
              </h3>

              <div className="flex flex-col gap-3">
                {contactInfo.map((info, index) => (
                  <p
                    key={index}
                    className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5"
                  >
                    {info.text}
                  </p>
                ))}
              </div>
            </address>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <p className="font-montserrat font-normal text-white text-base tracking-normal leading-normal">
            © 2025 SheBuildsAI. All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-montserrat font-normal text-white text-base tracking-normal leading-normal underline hover:text-white/75 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="font-montserrat font-normal text-white text-base tracking-normal leading-normal underline hover:text-white/75 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 bg-linear-to-b from-black/25 to-transparent bg-clip-text text-transparent font-montserrat font-medium text-[200px] tracking-tighter leading-none whitespace-nowrap pointer-events-none">
          SheBuildsAI
        </div>
      </div>
    </footer>
  );
}
