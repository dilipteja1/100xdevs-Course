
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <div
        className="border-b p-1 text-center"
      > Get 20% off for next 10 days</div>
        {children}
   </div>
  );
}
