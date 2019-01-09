const collapseDesignElement = document.querySelector('.collapseform-design');
const designContentElement = document.querySelector('.form_design_content');
const collapseFillElement = document.querySelector('.collapseform-fill');
const fillContentElement = document.querySelector('.form_fill_content');
const collapseShareElement = document.querySelector('.collapseform-share')
const shareContentElement = document.querySelector('.form_share_content');
const iconDesignElement = document.querySelector('.icon_design');
const iconFillElement = document.querySelector('.icon_fill');
const iconShareElement = document.querySelector('.icon_share');

function toggleCollapsibleIcon(collapsibleIcon) {
  if (collapsibleIcon.classList.contains('fa-angle-up')) {
    collapsibleIcon.classList.remove('fa-angle-up');
    collapsibleIcon.classList.add('fa-angle-down');
  } else {
    collapsibleIcon.classList.remove('fa-angle-down');
    collapsibleIcon.classList.add('fa-angle-up');
  }
}

function hideDesignContent() {
  if (!designContentElement.classList.contains('hidden')) {
    designContentElement.classList.add('hidden');
    toggleCollapsibleIcon(iconDesignElement);
  }
}

function hideFillContent() {
  if (!fillContentElement.classList.contains('hidden')) {
    fillContentElement.classList.add('hidden');
    toggleCollapsibleIcon(iconFillElement);
  }
}

function hideShareContent() {
  if (!shareContentElement.classList.contains('hidden')) {
    shareContentElement.classList.add('hidden');
    toggleCollapsibleIcon(iconShareElement);
  }
}

function handleCollapseDesign() {
  designContentElement.classList.toggle('hidden');
  toggleCollapsibleIcon(iconDesignElement);

  hideFillContent();
  hideShareContent();
  
}

function handleCollapseFill() {
  fillContentElement.classList.toggle('hidden');
  toggleCollapsibleIcon(iconFillElement);

  hideDesignContent();
  hideShareContent();
}

function handleCollapseShare() {
  shareContentElement.classList.toggle('hidden');
  toggleCollapsibleIcon(iconShareElement);

  hideDesignContent();
  hideFillContent();
}

collapseDesignElement.addEventListener('click', handleCollapseDesign);
collapseFillElement.addEventListener('click', handleCollapseFill);
collapseShareElement.addEventListener('click', handleCollapseShare);