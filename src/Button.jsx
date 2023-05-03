import clsx from "clsx";

export default function Button({
  variant = "default",
  children,
  disabled = false,
  disableShadow,
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(variant, {
        disableShadow,
      })}
    >
      {children}
    </button>
  );
}
