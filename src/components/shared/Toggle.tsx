import './Toggle.css';

export type ToggleSize = 'sm' | 'md';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: ToggleSize;
  name?: string;
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
  size = 'md',
  name,
}: ToggleProps) {
  const toggleClasses = [
    'toggle',
    `toggle--${size}`,
    disabled && 'toggle--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className="toggle-container">
      {label && (
        <label className="toggle-label text-sm">
          {label}
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={handleChange}
            disabled={disabled}
            className={toggleClasses}
          >
            <span
              className={`toggle-slider ${checked ? 'toggle-slider--checked' : ''}`}
            />
          </button>
        </label>
      )}
      {!label && (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={name}
          onClick={handleChange}
          disabled={disabled}
          className={toggleClasses}
        >
          <span
            className={`toggle-slider ${checked ? 'toggle-slider--checked' : ''}`}
          />
        </button>
      )}
    </div>
  );
}
