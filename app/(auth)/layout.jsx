export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="h-screen w-screen flex flex-col items-center">
        <div className="min-h-24 items-center justify-start pl-32 w-screen border-2 border-black flex center gap-80">
                <div>Logo</div>
            </div>
            {children}</body>
      </html>
    );
  }
  