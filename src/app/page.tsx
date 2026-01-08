import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import Image from "next/image";

const FourAthIcon = () => (
  <svg
    viewBox="0 0 200 80"
    className="h-20 w-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10,40 C10,10 90,0 120,30 C130,40 125,50 115,50"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M110,32 Q115,25 120,30"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M108,28 Q113,23 118,28"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
    <path d="M106,24 Q111,19 116,24" stroke="black" strokeWidth="2" fill="none" />
    <text
      x="5"
      y="65"
      fontFamily="Literata, serif"
      fontSize="50"
      fontWeight="bold"
      fill="black"
    >
      4arth
    </text>
  </svg>
);

const LeafDivider = () => (
  <svg
    viewBox="0 0 200 20"
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(100, 10) scale(0.8)">
      <path
        d="M-80,0 C-40,-15 40,-15 80,0"
        stroke="black"
        strokeWidth="1.5"
        fill="none"
      />
      <g>
        <path d="M-70,-1 Q-65, -8 -60,0" stroke="black" strokeWidth="1" fill="none" />
        <path d="M-50,-1 Q-45, -8 -40,0" stroke="black" strokeWidth="1" fill="none" />
        <path d="M-30,-1 Q-25, -8 -20,0" stroke="black" strokeWidth="1" fill="none" />
        <path d="M-10,-1 Q-5, -8 0,0" stroke="black" strokeWidth="1" fill="none" />
        <path d="M10,-1 Q15, -8 20,0" stroke="black" strokeWidth="1" fill="none" />
        <path d="M30,-1 Q35, -8 40,0" stroke="black" strokeWidth="1" fill="none" />
        <path d="M50,-1 Q55, -8 60,0" stroke="black" strokeWidth="1" fill="none" />
        <path d="M70,-1 Q75, -8 80,0" stroke="black" strokeWidth="1" fill="none" />
      </g>
    </g>
  </svg>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm rounded-lg border-[3px] border-black bg-white shadow-none font-body">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-2">
            <FourAthIcon />
            <p className="text-xl italic">Made in india</p>
            <div className="w-full py-2">
              <LeafDivider />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex flex-col items-center text-center">
                  <Image
                      src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.instagram.com/4arthofficial&color=000000&bgcolor=FFFFFF&qzone=1"
                      alt="QR code for 4ARTHOFFICIAL Instagram"
                      width={100}
                      height={100}
                  />
                  <p className="mt-2 text-xs font-mono">@4ARTHOFFICIAL</p>
              </div>

              <div className="flex flex-col text-right text-xs space-y-2">
                  <div className="flex items-center justify-end gap-2">
                      <div className="font-semibold">
                          <p>+91-9560104470</p>
                          <p>+91-8373931342</p>
                      </div>
                      <Phone className="h-4 w-4 flex-shrink-0" />
                  </div>
                  <div className="flex items-start justify-end gap-2">
                      <p className="max-w-[150px]">D 35/724 100 futa road Chhatarpur -110074 near, Dhanmill</p>
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  </div>
              </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
