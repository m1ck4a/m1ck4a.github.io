document.addEventListener('DOMContentLoaded', () => {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    const textEl = document.getElementById('text');
    const openButton = document.getElementById('open-button');

    const message = `Любимая Юленька! 🎄

Пусть 2026-й будет годом:
✨ тёплых встреч, приятных воспоминаний и больше волшебных моментов,
🕯️ улыбок, смеха и меньше нужды посещать своё учебное учреждение,
🌟 больше подарочков и подарочных карт в ЗЯ, оставайся такой же красивой и сияющей.

Тьи — моя звёздочка: волшебная, яркая и самая самая тёплая.
С Новым Годом, моя девотька! 🎇

С любовью,
Твой Димочка💌`;

    // ❄ Снег
    for (let i = 0; i < 20; i++) {
        const flake = document.createElement('div');
        flake.style.position = 'absolute';
        flake.style.top = '-10px';
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.width = (Math.random() * 6 + 4) + 'px';
        flake.style.height = flake.style.width;
        flake.style.borderRadius = '50%';
        flake.style.background = '#fff';
        flake.style.opacity = Math.random() * 0.5 + 0.3;
        flake.style.boxShadow = '0 0 3px rgba(255,255,255,0.8)';
        flake.style.animation = `fall ${Math.random() * 6 + 4}s linear ${Math.random() * 3}s infinite`;
        document.getElementById('snowfield').appendChild(flake);
    }

    // Обработчик клика — через невидимую кнопку
    openButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (openButton.dataset.clicked === 'true') return;

        openButton.dataset.clicked = 'true';
        openButton.style.pointerEvents = 'none';

        // Клапан ПРОПАДАЕТ (не поднимается!)
        flap.classList.add('hidden');

        // Листочек выезжает ВВЕРХ
        setTimeout(() => {
            letter.classList.add('show');
            typeText(textEl, message, 65);
        }, 300);
    }); 

    // Меняем курсор при наведении
    openButton.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'pointer';
    });
    openButton.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default';
    });
});

function typeText(el, text, delay = 60) {
    let i = 0;
    el.textContent = '';
    const iv = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
        } else {
            clearInterval(iv);
        }
    }, delay);
}