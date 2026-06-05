import { asset } from '../../utils/assets'

export default function Wordmark({ size = 28, dark = false, mono = false, inline = true, className = '', style }) {
  const src = mono
    ? asset('/assets/images/clasico-logo-mono.png')
    : dark
      ? asset('/assets/images/clasico-logo-dark.png')
      : asset('/assets/images/clasico-logo.png')

  const h = typeof size === 'number' ? size : undefined
  return (
    <img
      src={src}
      alt="Clasico"
      className={'clasico-logo ' + (inline ? 'is-inline ' : '') + className}
      style={{
        height: h ? h + 'px' : (size === 'inherit' ? '1.1em' : size),
        width: 'auto',
        display: inline ? 'inline-block' : 'block',
        verticalAlign: inline ? 'middle' : undefined,
        ...style,
      }}
    />
  )
}
