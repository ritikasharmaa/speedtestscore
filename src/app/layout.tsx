import type { Metadata } from "next";
import { fonts } from "./_theme/fonts";
import { Providers } from "./_theme/providers";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "SpeedScore - Accurate and Reliable Internet Speed Test",
  description:
    "SpeedScore is a fast and reliable internet speed testing tool. Measure your download, upload, and ping speeds instantly to ensure your internet connection is performing at its best.",
  keywords:
    "internet speed test, speedscore, download speed, upload speed, ping test, broadband speed, wifi speed, network performance",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <head>
        <link
          rel="icon"
          href="/images/sc_logo.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>

      <body>
        <Providers>
          <Header />
          <Banner />
          <Toaster position="top-right" />
          {modal}
          {children}
          {/* <Footer /> */}

          {/* Start of Tawk.to Script */}
          {/* <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/66a559a532dca6db2cb69c71/1i3qucceo';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
            }}
          /> */}
          {/* End of Tawk.to Script */}
        </Providers>
      </body>
    </html>
  );
}
