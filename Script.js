const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const profileImage = document.querySelector('.profile-image');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (!tab.classList.contains('active')) {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
            target.classList.add('active');

            // Slide up animation for the profile image on the Home tab
            if (tab.id === 'home') {
                profileImage.style.transform = 'translateY(-100%)';
            } else {
                // Reset the position of the profile image for other tabs
                profileImage.style.transform = 'translateY(0)';
            }
        }
    });
});
