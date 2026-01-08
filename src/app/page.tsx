import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8 font-body text-foreground">
      <Card className="w-full max-w-lg rounded-none border-2 border-foreground bg-card shadow-2xl">
        <CardHeader className="text-center p-8 border-b-2 border-foreground">
          <h1 className="font-headline text-7xl font-bold tracking-widest">
            4arth
          </h1>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <p className="text-center text-xl italic">A sustainable way of living</p>
          <p className="text-base text-center leading-relaxed max-w-md mx-auto">
            We are a brand that is built on the foundation of sustainability. We
            believe in creating products that are not only beautiful but also
            environmentally friendly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <div className="flex-shrink-0">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/4arth.in&color=000000&bgcolor=FFFFFF&qzone=1"
                alt="QR code for 4arth Instagram page"
                width={150}
                height={150}
                className="border-4 border-foreground p-1 bg-white"
              />
            </div>
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic">123 Sustainable Way, Ecocity, 4arth</address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6" aria-hidden="true" />
                <a href="tel:+919560104470" className="hover:underline">+91-9560104470</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6" aria-hidden="true" />
                <a href="tel:+918373931342" className="hover:underline">+91-8373931342</a>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-foreground text-background p-4 justify-center">
          <p className="font-bold text-lg tracking-[0.2em]">@4arth.in</p>
        </CardFooter>
      </Card>
    </main>
  );
}
