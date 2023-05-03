import clsx from "clsx";

export default function Button({
  variant = "default",
  children,
  disabled = false,
}) {
  console.log(variant);

  return (
    <>
      <button disabled={disabled} className={variant}>
        {children}
      </button>
    </>
  );
}
