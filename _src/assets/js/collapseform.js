const collapseDesignElement = document.querySelector('.collapseform-design');

const designContentElement = document.querySelector('.form_design_content');

const collapseFillElement = document.querySelector('.collapseform-fill');

const fillContentElement = document.querySelector('.form_fill_content');

const collapseShareElement = document.querySelector('.collapseform-share');

const shareContentElement = document.querySelector('.form_share_content');

const iconDesignElement = document.querySelector ('.icon_design');

const iconFillElement = document.querySelector ('.icon_fill');

const iconShareElement = document.querySelector ('.icon_share');

function handleCollapseDesign() {
    designContentElement.classList.toggle('hidden');
    if (iconDesignElement.classList.contains('fa-angle-up')) {
        iconDesignElement.classList.remove('fa-angle-up');
        iconDesignElement.classList.add('fa-angle-down');
    } else {
        iconDesignElement.classList.remove('fa-angle-down');
        iconDesignElement.classList.add('fa-angle-up');
    }
    
    if (!fillContentElement.classList.contains('hidden')) {
        fillContentElement.classList.add('hidden');
        if (iconFillElement.classList.contains('fa-angle-up')) {
            iconFillElement.classList.remove('fa-angle-up');
            iconFillElement.classList.add('fa-angle-down');
        } else {
            iconFillElement.classList.remove('fa-angle-down');
            iconFillElement.classList.add('fa-angle-up');
        }
    } 
    if (!shareContentElement.classList.contains('hidden')) {
        shareContentElement.classList.add('hidden');
        if (iconShareElement.classList.contains('fa-angle-up')) {
            iconShareElement.classList.remove('fa-angle-up');
            iconShareElement.classList.add('fa-angle-down');
        } else {
            iconShareElement.classList.remove('fa-angle-down');
            iconShareElement.classList.add('fa-angle-up');
        }
    } 
} 

function handleCollapseFill() {
    fillContentElement.classList.toggle('hidden');
    if (iconFillElement.classList.contains('fa-angle-up')) {
        iconFillElement.classList.remove('fa-angle-up');
        iconFillElement.classList.add('fa-angle-down');
    } else {
        iconFillElement.classList.remove('fa-angle-down');
        iconFillElement.classList.add('fa-angle-up');
    }

    if (!designContentElement.classList.contains('hidden')) {
        designContentElement.classList.add('hidden');
        if (iconDesignElement.classList.contains('fa-angle-up')) {
            iconDesignElement.classList.remove('fa-angle-up');
            iconDesignElement.classList.add('fa-angle-down');
        } else {
            iconDesignElement.classList.remove('fa-angle-down');
            iconDesignElement.classList.add('fa-angle-up');
        }
    } 
    if (!shareContentElement.classList.contains('hidden')) {
        shareContentElement.classList.add('hidden');
        if (iconShareElement.classList.contains('fa-angle-up')) {
            iconShareElement.classList.remove('fa-angle-up');
            iconShareElement.classList.add('fa-angle-down');
        } else {
            iconShareElement.classList.remove('fa-angle-down');
            iconShareElement.classList.add('fa-angle-up');
        }
    } 
} 


function handleCollapseShare() {
    shareContentElement.classList.toggle('hidden');
    if (iconShareElement.classList.contains('fa-angle-up')) {
        iconShareElement.classList.remove('fa-angle-up');
        iconShareElement.classList.add('fa-angle-down');
    } else {
        iconShareElement.classList.remove('fa-angle-down');
        iconShareElement.classList.add('fa-angle-up');
    }
    if (!designContentElement.classList.contains('hidden')) {
        designContentElement.classList.add('hidden');
        if (iconDesignElement.classList.contains('fa-angle-up')) {
            iconDesignElement.classList.remove('fa-angle-up');
            iconDesignElement.classList.add('fa-angle-down');
        } else {
            iconDesignElement.classList.remove('fa-angle-down');
            iconDesignElement.classList.add('fa-angle-up');
        }
    } 
    if (!fillContentElement.classList.contains('hidden')) {
        fillContentElement.classList.add('hidden');
        if (iconFillElement.classList.contains('fa-angle-up')) {
            iconFillElement.classList.remove('fa-angle-up');
            iconFillElement.classList.add('fa-angle-down');
        } else {
            iconFillElement.classList.remove('fa-angle-down');
            iconFillElement.classList.add('fa-angle-up');
        }
    } 
} 


collapseDesignElement.addEventListener('click', handleCollapseDesign);

collapseFillElement.addEventListener('click', handleCollapseFill);


collapseShareElement.addEventListener('click', handleCollapseShare);