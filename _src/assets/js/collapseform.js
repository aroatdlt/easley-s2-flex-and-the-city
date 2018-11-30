const collapseDesignElement = document.querySelector('.collapseform-design');

const designContentElement = document.querySelector('.form_design_content');

const collapseFillElement = document.querySelector('.collapseform-fill');

const fillContentElement = document.querySelector('.form_fill_content');

const collapseShareElement = document.querySelector('.collapseform-share');

const shareContentElement = document.querySelector('.form_share_content');


function handleCollapseDesign() {
    designContentElement.classList.toggle('hidden');
} 

function handleCollapseFill() {
    fillContentElement.classList.toggle('hidden');
} 


function handleCollapseShare() {
    shareContentElement.classList.toggle('hidden');
} 


collapseDesignElement.addEventListener('click', handleCollapseDesign);

collapseFillElement.addEventListener('click', handleCollapseFill);


collapseShareElement.addEventListener('click', handleCollapseShare);