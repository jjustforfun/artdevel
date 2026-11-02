---
title: "Доступный компонент Card с видимым фокусом"
slug: "dostupnaya-karta-fokus"
locale: "ru"
translationKey: "accessible-card-component"
summary: "Прототип полностью доступной с клавиатуры кликабельной карточки с аккуратным кольцом фокуса и корректной HTML-семантикой."
date: 2026-07-28
type: component
stack:
  - HTML
  - CSS
  - Доступность
---

## Цель

Создать компонент карточки, который:

- Полностью доступен с клавиатуры (корректный порядок табуляции)
- Имеет видимое и эстетичное кольцо фокуса
- Не использует лишних ARIA-атрибутов там, где хватает HTML-семантики

## Выбранный паттерн

Классический приём: `<a>`, растянутый на всю поверхность карточки через `position: absolute` и `inset: 0` при родителе с `position: relative`. Это исключает навешивание JS-обработчиков на `<div>`.

```html
<article class="card">
  <h2><a href="/..." class="card-link stretched-link">Заголовок</a></h2>
  <p>Описание карточки.</p>
</article>
```

```css
.card { position: relative; }

.stretched-link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.stretched-link:focus-visible::after {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-md);
}
```

## Ключевые моменты

- `:focus-visible` показывает кольцо только при навигации с клавиатуры, но не при клике мышью
- `outline` предпочтительнее `box-shadow` для лучшей кросс-браузерной совместимости
- `inset: 0` — современное сокращение для `top: 0; right: 0; bottom: 0; left: 0`
