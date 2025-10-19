// Allow importing CSS files (side-effect imports and CSS modules)
// This file fixes errors like: "Cannot find module or type declarations for side-effect import of './globals.css'.ts(2882)"

declare module "*.css" {
  const content: { [className: string]: string } & { __esModule?: boolean };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string } & { __esModule?: boolean };
  export default content;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// If you're using global side-effect imports (import './globals.css'),
// TypeScript will use the '*.css' declaration above which exports a dictionary.
