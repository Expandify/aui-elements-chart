document.addEventListener('DOMContentLoaded', async function () {
    const chart = document.getElementById('chart');
    const allOnBtn = document.getElementById('allOn');
    const symbolsOnlyBtn = document.getElementById('symbolsOnly');
    const symbolsRomanBtn = document.getElementById('symbolsRoman');
    const symbolsMeaningBtn = document.getElementById('symbolsMeaning');

    // Set active button
    function setActiveButton(activeButton) {
        [allOnBtn, symbolsOnlyBtn, symbolsRomanBtn, symbolsMeaningBtn].forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    // All on
    allOnBtn.addEventListener('click', function () {
        chart.classList.remove('symbols-only', 'symbols-roman', 'symbols-meaning');
        setActiveButton(allOnBtn);

        document.querySelectorAll('.symbol, .roman, .category, .number-symbol, .number-roman, .number-name, .number-title, .number-subtitle').forEach(el => {
            el.classList.remove('hidden');
        });
    });

    // Symbols only
    symbolsOnlyBtn.addEventListener('click', function () {
        setActiveButton(symbolsOnlyBtn);

        document.querySelectorAll('.symbol, .number-symbol').forEach(el => {
            el.classList.remove('hidden');
        });

        document.querySelectorAll('.roman, .category, .description, .number-roman, .number-name, .number-title, .number-subtitle').forEach(el => {
            el.classList.add('hidden');
        });
    });

    // Symbols + Roman
    symbolsRomanBtn.addEventListener('click', function () {
        setActiveButton(symbolsRomanBtn);

        document.querySelectorAll('.symbol, .roman, .number-symbol, .number-roman').forEach(el => {
            el.classList.remove('hidden');
        });

        document.querySelectorAll('.category, .description, .number-name, .number-title, .number-subtitle').forEach(el => {
            el.classList.add('hidden');
        });
    });

    // Symbols + Meaning
    symbolsMeaningBtn.addEventListener('click', function () {
        setActiveButton(symbolsMeaningBtn);

        document.querySelectorAll('.symbol, .category, .number-symbol, .number-name, .number-title').forEach(el => {
            el.classList.remove('hidden');
        });

        document.querySelectorAll('.roman, .number-roman, .number-subtitle').forEach(el => {
            el.classList.add('hidden');
        });
    });

});

document.getElementById('themeToggle').addEventListener('change', function () {
    document.documentElement.classList.toggle('theme-active', this.checked);
});


document.querySelectorAll('.sound').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        const audioSrc = button.getAttribute('href');
        const audio = new Audio(audioSrc);
        audio.play().catch(err => {
            console.error('Ошибка при воспроизведении аудио:', err);
        });
    });
});


(function (c, l, a, r, i, t, y) {
    c[a] =
        c[a] ||
        function () {
            (c[a].q = c[a].q || []).push(arguments);
        };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "8q4bxin4tm");


(async (engine) => {
    await loadStarsPreset(engine);
    await engine.load({
        id: "tsparticles", options: {
            preset: "stars",
            background: {
                color: "transparent"
            },
            particles: {
                size: {
                    value: { min: 0.5, max: 1.4 }
                },
                number: {
                    value: 600
                },
            }

        }});
})(tsParticles);






