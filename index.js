import TooltipBuilder from './TooltipBuilder';

export default {
    bind: (el, binding) => {
        const tooltip = new TooltipBuilder()
            .setPosition(binding.modifiers)
            .setText(binding.value)
            .build();
        el.style = 'position: relative;';
        el.appendChild(tooltip.html);
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);

        function showTooltip() {
            this.querySelector(`.${tooltip.class}`).style = 'display: block';
        }
        function hideTooltip() {
            this.querySelector(`.${tooltip.class}`).style = 'display: none';
        }
    }
}

