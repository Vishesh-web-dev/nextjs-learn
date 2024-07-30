
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            {children}  
            <p style={{backgroundColor: "ghostwhite", padding: '1rem'}}>Auth Group Route Layout</p>
        </>
    )
  }