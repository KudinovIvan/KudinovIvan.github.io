function showTooltip(event, id) {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.style.display = 'none';
    });

    const tooltip = document.getElementById(id);
    tooltip.style.display = 'block';
}

function changeText() {
    if (window.innerWidth <= 450) {
        document.getElementById('tooltip1').innerHTML = '<strong>Опасность!</strong> Открытое окно может опрокинуть горящую свечу и вызвать пожар.';
        document.getElementById('tooltip2').innerHTML = '<strong>Опасность!</strong> Заряжающийся ноутбук на полотенце может перегреться и воспламениться.';
        document.getElementById('tooltip3').innerHTML = '<strong>Опасность!</strong> Перегретые или поврежденные зарядные устройства могут вызвать пожар.';
    } else {
        document.getElementById('tooltip1').innerHTML = '<strong>Опасность!</strong> Открытое окно может вызвать движение воздуха, которое может свалить горящую свечу и привести к пожару. Будьте осторожны с открытым огнем рядом с окнами.';
        document.getElementById('tooltip2').innerHTML = '<strong>Опасность!</strong> Заряжающийся ноутбук на полотенце может перегреться и воспламениться. Используйте твердые поверхности для зарядки устройств.';
        document.getElementById('tooltip3').innerHTML = '<strong>Опасность!</strong> Перегретые или поврежденные зарядные устройства могут вызвать пожар. Убедитесь, что провода не повреждены и не перегреваются.';
    }
}

window.addEventListener('resize', changeText);
window.addEventListener('load', changeText);
