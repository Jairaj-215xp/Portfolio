function renderCertificates() {
    const certificates = window.portfolio.certificates;
    const container = document.getElementById("certificates-container");
    
    if (!container) return;

    if (!certificates || certificates.length === 0) {
        container.innerHTML = `
            <div class="section-title">
                <span>ACHIEVEMENTS</span>
                <h2>Certificates & Awards</h2>
            </div>
            <p style="text-align: center; color: var(--text-muted); margin-top: 40px;">
                No certificates uploaded yet. Check back soon!
            </p>
        `;
        return;
    }

    let html = `
        <div class="section-title">
            <span>ACHIEVEMENTS</span>
            <h2>Certificates & Awards</h2>
        </div>
        <div class="certificates-grid">
    `;

    certificates.forEach(cert => {
        // Fallback icon if no image is uploaded
        const imageHtml = cert.image 
            ? `<img src="${cert.image}" alt="${cert.title}">`
            : `<i class="fa-solid fa-certificate"></i>`;

        // Link button
        const linkHtml = cert.link 
            ? `<a href="${cert.link}" target="_blank" class="btn-cert">Verify <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
            : ``;

        html += `
            <div class="cert-card reveal">
                <div class="cert-image-large">
                    ${imageHtml}
                </div>
                <div class="cert-content">
                    <div class="cert-title">
                        <h3>${cert.title}</h3>
                        <div class="cert-issuer">${cert.issuer}</div>
                    </div>
                    <div class="cert-footer">
                        <div class="cert-date">${cert.date || ''}</div>
                        ${linkHtml}
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Observe for scroll reveal animation
    const newCards = container.querySelectorAll('.cert-card');
    if (window.observer) {
        newCards.forEach(card => window.observer.observe(card));
    }
}
