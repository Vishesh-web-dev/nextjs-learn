import { Metadata } from "next";
export const metadata : Metadata = {
  title: {
    default: 'About Page Child', //fallback for child  
    template: '%s | About Page', //child replace %s with their title
    // absolute: "About Page Main" //ignores template in from parent it is absolute don't need much
  },
}
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <header>
            <p style={{backgroundColor: "lightblue", padding: '1rem'}}>About Header</p>
          </header>
            {children}  
          <footer>
            <p style={{backgroundColor: "ghostwhite", padding: '1rem'}}>About    Footer</p>
          </footer>
        </>
    )
  }