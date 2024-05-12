function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.container-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

document.getElementById("linkedin-button").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/liam-badgley/", "_blank");
});

document.getElementById("github-button").addEventListener("click", function() {
    window.open("https://github.com/LiamBa99", "_blank");
});