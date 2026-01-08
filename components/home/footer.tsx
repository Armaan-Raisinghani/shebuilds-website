import Image from "next/image";

export function FooterSection() {
  const siteMapLinks = [
    { label: "Home" },
    { label: "Program & Events" },
    { label: "Women Trailblazers" },
    { label: "Learning Hub" },
    { label: "Opportunity Repository" },
  ];

  const contactInfo = [
    { text: "+91 99999 99999" },
    { text: "shebuildsai@email.com" },
    { text: "Plaksha University, Sector 25, Mohali, Punjab 140301" },
  ];

  const partnerLogos = [
    {
      src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-6.png",
      alt: "Partner logo 1",
      className: "w-52 h-16",
      width: 214,
      height: 64,
    },
    {
      src: "https://c.animaapp.com/mjvqb3fs5p8iw8/img/image-8.png",
      alt: "Partner logo 2",
      className: "w-36 h-12 object-cover",
      width: 147,
      height: 48,
    },
  ];

  return (
    <footer className="w-full flex flex-col gap-12 py-8 px-20">
      <div className="flex flex-wrap items-start justify-between gap-12">
        <div className="flex flex-col max-w-xl gap-7 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="flex flex-col max-w-sm gap-4">
            <h2 className="text-white font-montserrat font-medium text-3xl tracking-tight leading-8">
              SheBuildsAI
            </h2>

            <p className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5">
              An ecosystem for women in AI and deep tech
              spotlighting leaders and innovators, surfaces insights
              and trends, and expands access to opportunities, scholarships, and
              resources
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={index}
                  className={logo.className}
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

        <div className="flex items-start gap-6 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          <nav className="flex flex-col w-44 gap-4">
            <h3 className="font-montserrat font-medium text-white text-base tracking-normal leading-relaxed">
              Site Map
            </h3>

            <ul className="flex flex-col gap-3">
              {siteMapLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-montserrat font-normal text-white/75 text-xs tracking-normal leading-5 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
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

      <div className="flex items-center justify-between w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <p className="font-montserrat font-normal text-white text-base tracking-normal leading-normal">
          © 2025 SheBuildsAI. All rights reserved
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-montserrat font-normal text-white text-base tracking-normal leading-normal underline hover:text-white/75 transition-colors"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="font-montserrat font-normal text-white text-base tracking-normal leading-normal underline hover:text-white/75 transition-colors"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
