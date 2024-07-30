export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <header>
            <p style={{backgroundColor: "lightblue", padding: '1rem'}}>Product Header</p>
          </header>
            {children}  
          <footer>
            <p style={{backgroundColor: "ghostwhite", padding: '1rem'}}>Product Footer</p>
          </footer>
        </>
    )
  }