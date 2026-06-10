import { useState } from 'react'

/**
 * Renders an <img>, but swaps to `children` (a fallback node such as initials
 * or an icon) if the image is missing or fails to load.
 */
export default function ImageWithFallback({ src, alt, className, children }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return children
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
