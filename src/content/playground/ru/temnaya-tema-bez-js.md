---
title: "Адаптивная тёмная тема без JavaScript"
slug: "temnaya-tema-bez-js"
locale: "ru"
translationKey: "dark-theme-experiment"
summary: "Исследование переключения светлой/тёмной темы на чистом CSS с помощью `prefers-color-scheme` и Custom Properties — ни строчки JavaScript."
date: 2026-07-10
type: experiment
stack:
  - CSS
  - Custom Properties
  - HTML
---

## Контекст

Большинство туториалов по тёмной теме используют JavaScript для хранения предпочтений в `localStorage`. Этот эксперимент исследует, насколько далеко можно зайти используя только CSS.

## Подход

Работают два нативных механизма:

- `prefers-color-scheme` для определения системной темы
- Custom Properties, переопределённые в `:root` через медиазапрос

```css
:root {
  --color-bg: #faf9f6;
  --color-text: #2c2825;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1e1d1b;
    --color-text: #e8e2d9;
  }
}
```

## Результаты

- ✅ Ноль JS, никаких мерцаний при загрузке
- ✅ Уважает системные настройки без скриптов
- ⚠️ Ограничение: нет ручного переключения с сохранением (нужен JS + `localStorage`)

## Вывод

Для статического портфолио в стиле эко-дизайна этот паттерн идеален. Ручное переключение можно добавить позже как прогрессивное улучшение.
