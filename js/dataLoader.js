async function loadPortfolio() {

    const response = await fetch("data/portfolio.json");

    const data = await response.json();

    window.portfolio = data;

    // Update projects stat
    const projectStatEl = document.getElementById("stat-projects");
    if (projectStatEl && window.portfolio.projects) {
        projectStatEl.innerText = `${window.portfolio.projects.length}+`;
    }
    try {
        const certResponse = await fetch("data/certificates.json");
        const certData = await certResponse.json();
        window.portfolio.certificates = certData.certificates || [];
        
        // Update certificate stat
        const certStatEl = document.getElementById("stat-certificates");
        if (certStatEl) {
            certStatEl.innerText = `${window.portfolio.certificates.length}+`;
        }
    } catch (error) {
        console.warn("Could not load certificates.json", error);
        window.portfolio.certificates = [];
    }

    loadHero();
    if (typeof renderProjects === "function") {
        renderProjects();
    }
    if (typeof renderCertificates === "function") {
        renderCertificates();
    }
    if (typeof renderJourney === "function") {
        renderJourney();
    }

}

loadPortfolio();