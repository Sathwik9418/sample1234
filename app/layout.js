import { League_Spartan } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${leagueSpartan.className} antialiased`}
        >

            <main className="min-h-screen">

              {children}
            </main>
        </body>
      </html>
    </ClerkProvider>
  );
}