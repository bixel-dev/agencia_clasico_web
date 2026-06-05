export function smoothTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 92
  window.scrollTo({ top: y, behavior: 'smooth' })
}
