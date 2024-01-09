// // Initially show the home section by default
// showSection('home');

// function showSection(sectionId) {
//     // Hide all sections
//     var sections = document.querySelectorAll('.page-section');
//     sections.forEach(function(section) {
//         section.classList.remove('active-section');
//     });

//     // Show the selected section
//     var selectedSection = document.getElementById(sectionId);
//     if (selectedSection) {
//         selectedSection.classList.add('active-section');
//     }
// }

// sections.js

// Initially show the home section by default
showSection('home');

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.page-section');
    sections.forEach(function (section) {
        section.classList.remove('active-section');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active-section');
    }
}
