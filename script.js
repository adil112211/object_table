
document.getElementById('auth-button').addEventListener('click', () => {
  const url = new URL(window.location.href);
  const referer = url.hostname;
  const clientId = "9e1c98f2-91d2-4b4d-bd8f-02cb8ae88db8";
  const redirectUri = "https://adil112211.github.io/object_table/";
  const state = "secure123";
  const authUrl = `https://www.amocrm.ru/oauth?client_id=${clientId}&state=${state}&mode=post_message&redirect_uri=${redirectUri}`;
  window.location.href = authUrl;
});

// Только шаблон, без вызова токенов, чтобы не хранить секрет в коде
