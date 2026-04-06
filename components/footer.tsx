import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Quantamania Technologies"
                width={180}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-first education technology. Building the future of personalized
              learning.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Product
            </span>
            <nav className="flex flex-col gap-3">
              <Link
                href="https://instalearnapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                InstaLearn
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Registered Office
            </span>
            <address className="flex flex-col gap-1 not-italic text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                Quantamania Technologies Private Limited
              </span>
              <span>C4 1502, Cleo County,</span>
              <span>Noida, Sector-124</span>
              <span>Uttar Pradesh-201301,</span>
              <span>India</span>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Quantamania Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
