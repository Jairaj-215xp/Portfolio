function renderJourney() {
    const timelineData = window.portfolio.timeline;
    const journeyContainer = document.getElementById("journey-timeline");
    if (!journeyContainer || !timelineData) return;

    let html = ``;

    let currentYear = "";

    timelineData.forEach((item, index) => {
        // Add a year marker if the year changes
        if (item.year !== currentYear) {
            currentYear = item.year;
            html += `
                <div class="timeline-year-marker">
                    <span>${currentYear}</span>
                </div>
            `;
        }

        const alignClass = index % 2 === 0 ? "left" : "right";

        html += `
            <div class="timeline-item ${alignClass}">
                <div class="timeline-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="timeline-content">
                    <div class="timeline-text">
                        <span class="timeline-category">${item.category}</span>
                        <p class="timeline-description">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
    });

    journeyContainer.innerHTML = html;

    // Observe new timeline items for scroll reveal
    const reveals = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    reveals.forEach(item => observer.observe(item));
}
