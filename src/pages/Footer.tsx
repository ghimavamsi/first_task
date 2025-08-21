import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Heading */}
        <h2 className="footer-heading">MyBrand</h2>

        {/* Address */}
        <p className="footer-address">
          123 Main Street, Hyderabad, India
        </p>

        {/* Rights Reserved */}
        <p className="footer-rights">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
