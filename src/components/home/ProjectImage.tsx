import { useEffect, useRef, useState } from 'react'
import type { AssetReference } from '../../types/content'

type ProjectImageProps = {
  visual: AssetReference
  className?: string
}

export function ProjectImage({ visual, className = '' }: ProjectImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const triggerElement = triggerRef.current
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
      triggerElement?.focus()
    }
  }, [isOpen])

  return (
    <>
      <button aria-label={`View larger image: ${visual.alt}`} className={`project-image ${className}`} onClick={() => setIsOpen(true)} ref={triggerRef} type="button">
        <img alt={visual.alt} src={visual.src} />
      </button>

      {isOpen ? (
        <div aria-modal="true" className="image-lightbox" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false) }} role="dialog">
          <button aria-label="Close image" className="image-lightbox__close" onClick={() => setIsOpen(false)} ref={closeButtonRef} type="button">Close <span aria-hidden="true">×</span></button>
          <img alt={visual.alt} className="image-lightbox__image" src={visual.src} />
        </div>
      ) : null}
    </>
  )
}
