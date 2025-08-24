// 年号を自動更新
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// 低速回線・Reduce Motion 配慮（必要に応じてアニメ抑制など拡張可能）
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
  document.documentElement.style.scrollBehavior = 'auto';
}

// もし将来フォームを本送信に切り替える場合のサンプル（preventDefault）
// document.querySelector('.contact')?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   alert('送信ありがとうございました！');
// });
