function renderProjects() {
    const projects = window.portfolio.projects;
    const projectsContainer = document.getElementById("projects");
    if (!projectsContainer || !projects) return;

    let html = `
        <div class="section-title">
            <span>MY WORK</span>
            <h2>Featured Projects</h2>
        </div>
        <div class="projects-grid">
    `;

    projects.forEach(project => {
        let statusClass = project.status.toLowerCase().includes('design') ? 'design-phase' : '';
        
        html += `
            <div class="project-card reveal">
                <div class="project-image">
                    <img src="${project.cover}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/600x400?text=Project+Image'">
                    <span class="project-status ${statusClass}">${project.status}</span>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p class="project-subtitle">${project.subtitle}</p>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="btn-github"><i class="fa-brands fa-github"></i> Source</a>` : ''}
                        ${project.live ? `<a href="${project.live}" target="_blank" class="btn-live"><i class="fa-solid fa-external-link"></i> Live Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    projectsContainer.innerHTML = html;

    // Observe newly added project cards for scroll reveal
    const newCards = projectsContainer.querySelectorAll('.project-card');
    if (window.observer) {
        newCards.forEach(card => window.observer.observe(card));
    }
}