// 获取系统主题
const media = matchMedia('(prefers-color-scheme: dark)');
function followOs() {
  document.documentElement.dataset.theme = media.matches ? 'dark' : 'light';
}

// 监听主题变化
const theme = ref(localStorage.getItem('theme') || 'os');
watchEffect(() => {
  localStorage.setItem('theme', theme.value);

  if ('os' === theme.value) {
    followOs();
    media.addEventListener('change', followOs);
  } else {
    document.documentElement.dataset.theme = theme.value;
    media.removeEventListener('change', followOs);
  }
});

export default theme;
