document.querySelectorAll('[tab]')?.forEach(tab => {
    tab.addEventListener('click', (event) => {
        document.querySelectorAll(`[tab="${tab.getAttribute('tab')}"]`).forEach(allTab => {
            allTab.classList.remove('active');
        });
        document.querySelectorAll(`[tab-content="${tab.getAttribute('tab')}"]`).forEach(allTabContent => {
            allTabContent.classList.remove('active');
        });

        tab.classList.add('active');
        document.querySelector(`[tab-content="${tab.getAttribute('tab')}"]#${tab.id}`).classList.add('active');
    });
});