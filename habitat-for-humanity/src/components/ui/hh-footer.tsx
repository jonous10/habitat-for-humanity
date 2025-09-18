export function HH_Footer() {
  return (
    <footer className="bg-[#3E3F29] shadow-inner mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500 flex flex-col items-center gap-2">
        <div className="flex gap-4 justify-center mb-2">
          <a href="https://www.facebook.com/habitat" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://x.com/Habitat_EME" target="_blank" rel="noopener noreferrer" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCi4NpmrCl2oWjBIti8f_5uQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/company/habitat-for-humanity-eme/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/habitatforhumanity/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} Habitat for Humanity. All rights reserved.
        </div>
      </div>
    </footer>
  )
}