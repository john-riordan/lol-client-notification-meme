import TooltipComponent from '../components/Tooltip.svelte';

export function tooltip(element, params) {
  let div;
  let title;
  let tooltipComponent;

  function mouseOver(event) {
    console.log('element', element.getBoundingClientRect());
    const rect = element.getBoundingClientRect();
    tooltipComponent = new TooltipComponent({
      props: {
        title: params.title,
        content: params.content,
        x: rect.x + rect.width,
        y: rect.y + rect.height,
      },
      target: document.body,
    });
  }
  function mouseLeave() {
    tooltipComponent.$destroy();
    // NOTE: restore the `title` attribute
    element.setAttribute('title', title);
  }

  element.addEventListener('mouseover', mouseOver);
  element.addEventListener('mouseleave', mouseLeave);

  return {
    destroy() {
      element.removeEventListener('mouseover', mouseOver);
      element.removeEventListener('mouseleave', mouseLeave);
    },
  };
}
