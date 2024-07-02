function showTooltip(event, id) {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.style.display = 'none';
    });

    const tooltip = document.getElementById(id);
    tooltip.style.display = 'block';
}