// Toggle menu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference or use preferred color scheme
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add("dark")
    document.getElementById("theme-toggle").checked = true
    document.getElementById("theme-toggle-mobile").checked = true
  }

  // Theme toggle event listeners
  const themeToggle = document.getElementById("theme-toggle")
  const themeToggleMobile = document.getElementById("theme-toggle-mobile")

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
      themeToggleMobile.checked = true
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
      themeToggleMobile.checked = false
    }
  })

  themeToggleMobile.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
      themeToggle.checked = true
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
      themeToggle.checked = false
    }
  })

  // Animated text
  const text = document.querySelector(".sec-text")
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Frontend Developer"
    }, 0)
    setTimeout(() => {
      text.textContent = "UI/UX Designer"
    }, 4000)
    setTimeout(() => {
      text.textContent = "Web Developer"
    }, 8000)
  }
  textLoad()
  setInterval(textLoad, 12000)

  // Back to top button
  const backToTopButton = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  })

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Animate skill progress bars on scroll
  const skillSections = document.querySelectorAll(".skill-progress")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector(".progress")
        progressBar.style.width = progressBar.style.width
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  skillSections.forEach((section) => {
    observer.observe(section)
  })

  // Form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just log it and show an alert
      console.log({ name, email, subject, message })

      // Show success message
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }
})

// Initialize particles.js
document.addEventListener("DOMContentLoaded", () => {
  // Check if particlesJS is defined (e.g., by checking if the function exists)
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#6366f1",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6366f1",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  }

  // Toggle menu function
  window.toggleMenu = () => {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
  }

  // Theme toggle functionality
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add("dark")
    document.getElementById("theme-toggle").checked = true
    document.getElementById("theme-toggle-mobile").checked = true
  }

  const themeToggle = document.getElementById("theme-toggle")
  const themeToggleMobile = document.getElementById("theme-toggle-mobile")

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
      themeToggleMobile.checked = true
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
      themeToggleMobile.checked = false
    }
  })

  themeToggleMobile.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
      themeToggle.checked = true
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
      themeToggle.checked = false
    }
  })

  // Animated text
  const text = document.querySelector(".sec-text")
  const textRotation = () => {
    setTimeout(() => {
      text.textContent = "web applications"
    }, 0)
    setTimeout(() => {
      text.textContent = "mobile apps"
    }, 4000)
    setTimeout(() => {
      text.textContent = "user experiences"
    }, 8000)
  }

  textRotation()
  setInterval(textRotation, 12000)

  // Back to top button
  const backToTopButton = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  })

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Skill progress bars animation
  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll(".progress")
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width")
      bar.style.width = width
    })
  }

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")

      // Hide all tab panes
      tabPanes.forEach((pane) => pane.classList.remove("active"))
      // Show the corresponding tab pane
      const targetPane = document.getElementById(button.getAttribute("data-target"))
      targetPane.classList.add("active")

      // Animate progress bars in the active tab
      animateProgressBars()
    })
  })

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")

      const filter = button.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      console.log({ name, email, subject, message })

      // Show success message
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Initialize animations
  animateProgressBars()

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions)

  // Observe elements that should animate on scroll
  document.querySelectorAll(".skill-card, .details-container, .project-card, .contact-card").forEach((element) => {
    observer.observe(element)
  })
})

