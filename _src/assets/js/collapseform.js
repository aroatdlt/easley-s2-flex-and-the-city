const collapseDesignElement = document.querySelector('.collapseform-design');

const designhiddenElement = document.querySelector('.form_section_content');

function handleCollapseForm () {
    designhiddenElement.classList.toggle('designhidden');
} 


collapseDesignElement.addEventListener('click', handleCollapseForm);