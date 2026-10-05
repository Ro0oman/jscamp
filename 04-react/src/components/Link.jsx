import { useRouter } from "../hooks/useRouter";

export function Link({ href, children, ...restOfProps }) {
  const { navigateTo, currentPath } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    navigateTo(href);
  };

  if (currentPath == href) {
    console.log("iguales");
  }
  return (
    <a
      className={currentPath == href ? "is-active" : ""}
      href={href}
      {...restOfProps}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
