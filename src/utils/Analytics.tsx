import Script from "next/script"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const Analytics = () => {
  if (process.env.NODE_ENV !== "production") {
    return <></>
  }

  if (!GA_ID) {
    console.warn("NEXT_PUBLIC_GA_ID not defined")
    return <></>
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
