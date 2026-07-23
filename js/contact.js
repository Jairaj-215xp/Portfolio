document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        const allInputs = contactForm.querySelectorAll("input, textarea");
        
        // Remove invalid class when user starts typing
        allInputs.forEach(input => {
            input.addEventListener("input", () => {
                input.parentElement.classList.remove("invalid");
            });
        });

        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            let isValid = true;
            
            allInputs.forEach(input => {
                if (!input.checkValidity()) {
                    isValid = false;
                    input.parentElement.classList.add("invalid");
                } else {
                    input.parentElement.classList.remove("invalid");
                }
            });

            if (!isValid) return;

            const btn = contactForm.querySelector("button");
            const originalText = btn.innerHTML;

            // Change button text to show it's sending
            btn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
            
            const formData = new FormData(contactForm);
            // NOTE: The user must replace YOUR_ACCESS_KEY_HERE with their real key from web3forms.com
            formData.append("access_key", "5251337d-39eb-4504-9635-6957e1464ada");

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    btn.innerHTML = `<span>Sent Successfully!</span> <i class="fa-solid fa-check"></i>`;
                    btn.style.background = "#10b981"; // Success green
                    btn.style.borderColor = "#10b981";
                    contactForm.reset();
                } else {
                    btn.innerHTML = `<span>Error Sending</span> <i class="fa-solid fa-xmark"></i>`;
                    btn.style.background = "#ef4444";
                }
            } catch (error) {
                btn.innerHTML = `<span>Error Sending</span> <i class="fa-solid fa-xmark"></i>`;
                btn.style.background = "#ef4444";
            }

            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = "";
                btn.style.borderColor = "";
            }, 3000);
        });
    }

    // Scroll Reveal for Contact
    const contactContainer = document.querySelector(".contact-container");
    if (contactContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 });
        observer.observe(contactContainer);
    }
});
