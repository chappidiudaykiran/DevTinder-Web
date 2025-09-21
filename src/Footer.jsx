import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal fixed bottom-0 bg-base-300 text-base-content p-4 justify-center">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
  )
}

export default Footer