document.addEventListener("DOMContentLoaded", () => {
  // Navigation active state
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-links a")

  // Hamburger menu
  const hamburger = document.querySelector(".hamburger")
  const navLinksContainer = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active")
  })

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active")
    })
  })

  // Scroll spy
  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })
  })

  // Modal pour le tableau de compétences
  const modal = document.getElementById("competences-modal")
  const btn = document.getElementById("competences-btn")
  const span = document.getElementsByClassName("close")[0]

  btn.onclick = () => {
    modal.style.display = "block"
  }

  span.onclick = () => {
    modal.style.display = "none"
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }
})
