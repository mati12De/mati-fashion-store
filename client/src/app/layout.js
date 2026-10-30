import "./globals.css";

export const metadata = {
  title: "MATI | Wear Your Point of View",
  description:
    "Discover considered men's fashion, modern essentials and a more personal way to shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
