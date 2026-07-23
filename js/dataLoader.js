async function loadPortfolio() {

    const response = await fetch("data/portfolio.json");

    const data = await response.json();

    window.portfolio = data;

    loadHero();
    if (typeof renderProjects === "function") {
        renderProjects();
    }
    if (typeof renderJourney === "function") {
        renderJourney();
    }

}

loadPortfolio();