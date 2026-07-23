function loadHero() {

    const profile = window.portfolio.profile;

    document.getElementById("hero-name").innerHTML =
        profile.name.replace(" ", "<br>");

    document.getElementById("hero-role").textContent =
        profile.tagline;

    document.getElementById("hero-description").textContent =
        profile.description;

    document.getElementById("hero-photo").src =
        profile.photo;

    document.getElementById("card-name").textContent =
        profile.name;

    document.getElementById("card-status").textContent =
        profile.availability;

    document.getElementById("card-location").textContent =
        "📍 " + profile.location;

    const socials = profile.socials;

    const githubLink = document.getElementById("github-link");
    if (githubLink) {
        githubLink.href = socials.github;
        githubLink.target = "_blank";
    }

    const linkedinLink = document.getElementById("linkedin-link");
    if (linkedinLink) {
        linkedinLink.href = socials.linkedin;
        linkedinLink.target = "_blank";
    }

    const emailLink = document.getElementById("email-link");
    if (emailLink) {
        emailLink.href = "mailto:" + socials.email;
    }

    // Automatically parse and update CGPA from Journey/Timeline
    const timeline = window.portfolio.timeline;
    if (timeline && timeline.length > 0) {
        let latestCgpa = null;
        // Search backwards from the most recent entries
        for (let i = timeline.length - 1; i >= 0; i--) {
            const description = timeline[i].description;
            // Matches "CGPA of 8.95" or "CGPA: 8.61" or similar
            const match = description.match(/CGPA\s*(?:of|:)?\s*([\d.]+)/i);
            if (match && match[1]) {
                latestCgpa = match[1];
                break;
            }
        }
        
        const cgpaElement = document.getElementById("stat-cgpa");
        if (latestCgpa && cgpaElement) {
            cgpaElement.textContent = latestCgpa;
        }
    }
}