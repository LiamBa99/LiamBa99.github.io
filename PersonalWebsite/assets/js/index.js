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
