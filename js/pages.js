// js/pages.js

export const pages = {
  // Main page
  home: () => `
        <section class="hero">
            <div class="banner-container">
                <div class="banner-img"></div>
                <div class="hero-content">
                    <h2>Магнітні клавіатури з Rapid Trigger</h2>
                    <button>До каталогу</button>
                </div>
            </div>
        </section>
        <section class="popular">
            <h3>Популярні моделі</h3>
            <div class="product-grid">
                <article class="product-card"><div class="img-placeholder"></div><h4>Wooting 60HE+</h4><p>7200 грн</p></article>
                <article class="product-card"><div class="img-placeholder"></div><h4>SteelSeries Apex Pro</h4><p>6800 грн</p></article>
                <article class="product-card"><div class="img-placeholder"></div><h4>Razer Huntsman V3</h4><p>7500 грн</p></article>
                <article class="product-card"><div class="img-placeholder"></div><h4>Keychron Q1 HE</h4><p>8200 грн</p></article>
                <article class="product-card"><div class="img-placeholder"></div><h4>DrunkDeer A75</h4><p>5400 грн</p></article>
                <article class="product-card"><div class="img-placeholder"></div><h4>Akko MOD007B HE</h4><p>6100 грн</p></article>
                <article class="product-card"><div class="img-placeholder"></div><h4>Varmilo Victory</h4><p>7900 грн</p></article>
                <article class="product-card"><div class="img-placeholder"></div><h4>Arbiter Studio 65</h4><p>6300 грн</p></article>
            </div>
        </section>
    `,

  // About us
  about: () => `
    <section class="about-page">
        <div class="about-container">
            <h2>Про Click & Type</h2>
            <div class="about-card">
                <p>Ми — перший в Україні спеціалізований магазин магнітних клавіатур. Наша місія — надати геймерам та ентузіастам доступ до передової технології <strong>Rapid Trigger</strong>.</p>
                <div class="about-grid">
                    <div class="about-item">
                        <h4>📍 Локація</h4>
                        <p>Наш сучасний склад та шоурум знаходяться у самому центрі Дніпра.</p>
                    </div>
                    <div class="about-item">
                        <h4>🚚 Доставка</h4>
                        <p>Відправляємо замовлення щодня по всій Україні через Нову Пошту.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`,

  // Contacts
  contacts: () => `
        <section class="feedback">
            <h3>Зв'яжіться з нами</h3>
            <form id="feedback-form" class="feedback-form">
                <input type="text" id="user-name" placeholder="Ваше ім’я" required />
                
                <div class="input-wrapper">
                    <input type="email" id="user-email" placeholder="Email" required />
                    <span id="email-error" class="error-msg">Невірний формат email</span>
                </div>

                <textarea id="user-message" placeholder="Повідомлення" required></textarea>
                <button type="submit" id="submit-btn">Відправити</button>
            </form>
            <div id="comments-container" class="comments-list"></div>
        </section>
    `,

  blog: () => `
        <section class="blog-section">
            <h1>Блог про девайси</h1>
            <div id="blog-container">
                <div class="loader">Завантаження статей...</div>
            </div>
        </section>
    `,

  // function to render post cards in the blog section
  renderPostCards: (posts) => {
    return posts
      .map(
        (post) => `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.body.substring(0, 100)}...</p>
                <button class="read-more">Читати далі</button>
            </div>
        `
      )
      .join("");
  },
};
