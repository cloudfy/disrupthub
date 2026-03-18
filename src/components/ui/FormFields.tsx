import {
  forwardRef,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react'

interface FieldProps {
  label?: string
  error?: string
  hint?: string
}

// ── Input ──────────────────────────────────────────────────────────────────
interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const fieldId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={fieldId}
            className="text-sm font-semibold text-[var(--color-text-secondary)] font-[var(--font-body)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={fieldId}
          className={['input-field', error ? 'error' : '', className].filter(Boolean).join(' ')}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <span aria-hidden>⚠</span> {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

// ── Select ─────────────────────────────────────────────────────────────────
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement>, FieldProps {}

export const Select = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, hint, id, className = '', children, ...props }, ref) => {
    const fieldId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={fieldId}
            className="text-sm font-semibold text-[var(--color-text-secondary)] font-[var(--font-body)]"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={fieldId}
          className={['input-field cursor-pointer', error ? 'error' : '', className]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          {children}
        </select>
        {error && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <span aria-hidden>⚠</span> {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
        )}
      </div>
    )
  },
)
Select.displayName = 'Select'

// ── Textarea ───────────────────────────────────────────────────────────────
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, FieldProps {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const fieldId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={fieldId}
            className="text-sm font-semibold text-[var(--color-text-secondary)] font-[var(--font-body)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={fieldId}
          rows={5}
          className={['input-field resize-y min-h-[120px]', error ? 'error' : '', className]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <span aria-hidden>⚠</span> {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
        )}
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'
