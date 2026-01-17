import Image from "next/image";
import Link from "next/link";

const siteMapLinks = [
  { label: "Home", href: "/" },
  { label: "Program & Events", href: "/programs" },
  { label: "Women Trailblazers", href: "/trailblazers" },
  { label: "Insights Hub", href: "/insights" },
  { label: "Learning Hub", href: "/hub" },
  { label: "Opportunity Repository", href: "/opportunity" },
];

const contactInfo = [
  { text: "+91 99999 99999" },
  { text: "shebuildsai@email.com" },
  { text: "Plaksha University, Sector 25, Mohali, Punjab 140301" },
];

const partnerLogos = [
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-6.png",
    alt: "Plaksha University logo",
    width: 214,
    height: 64,
  },
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/mphasis-foundation-1.png",
    alt: "Mphasis Foundation logo",
    width: 147,
    height: 48,
  },
  {
    src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-10.png",
    alt: "Udaiti Foundation logo",
    width: 74,
    height: 31,
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-teal-900 pt-12 sm:pt-16 pb-8">
      <div className="w-full px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-8 sm:gap-12">
          <div className="flex flex-col max-w-xl gap-7">
            <div className="flex flex-col max-w-sm gap-4">
              <h2 className="text-white font-montserrat font-medium text-2xl sm:text-3xl tracking-tight leading-8">
                SheBuildsAI
              </h2>

              <p className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5">
                An initiative of the DS Brar Centre for Girls & Women in STEM at Plaksha
                University, supported by Mphasis F1 Foundation. Building an ecosystem for women in AI and deep tech.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5">
                Partners
              </p>
              <div className="flex items-center gap-4 flex-wrap">
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
            </div>
          </div>

          <div className="flex items-start gap-6 sm:gap-6 w-full sm:w-auto">
            <nav className="flex flex-col w-36 sm:w-44 gap-4">
              <h3 className="font-montserrat font-medium text-white text-base tracking-normal leading-relaxed">
                Site Map
              </h3>

              <ul className="flex flex-col gap-3">
                {siteMapLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5 hover:text-white transition-colors underline underline-offset-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="flex flex-col w-36 sm:w-44 gap-4 not-italic">
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

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <p className="font-montserrat font-normal text-white text-sm sm:text-base tracking-normal leading-normal">
            © 2025 SheBuildsAI. All rights reserved
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="font-montserrat font-normal text-white text-sm sm:text-base tracking-normal leading-normal underline hover:text-white/75 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="font-montserrat font-normal text-white text-sm sm:text-base tracking-normal leading-normal underline hover:text-white/75 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden hidden sm:block">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 bg-linear-to-b from-black/25 to-transparent bg-clip-text text-transparent font-montserrat font-medium text-[200px] tracking-tighter leading-none whitespace-nowrap pointer-events-none">
          SheBuildsAI
        </div>
      </div>
    </footer>
  );
}
