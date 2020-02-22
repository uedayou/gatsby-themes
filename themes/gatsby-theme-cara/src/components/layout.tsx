import React from "react"
import SEO from "./seo"
import "../styles/global.css"

type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <React.Fragment>
    <SEO />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
