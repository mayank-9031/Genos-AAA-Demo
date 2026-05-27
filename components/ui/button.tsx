import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-[15px] font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-amber text-ink hover:bg-amber/90 focus-visible:ring-ink focus-visible:ring-offset-stone",
        outline:
          "border border-ink/40 text-ink hover:bg-ink/5 focus-visible:ring-ink focus-visible:ring-offset-stone",
        ghost:
          "bg-transparent text-ink hover:bg-stone focus-visible:ring-ink focus-visible:ring-offset-stone",
        "ghost-light":
          "border border-white/70 text-white bg-transparent hover:border-amber hover:text-amber focus-visible:ring-white focus-visible:ring-offset-transparent",
        // Cream-on-dark — used in navbar over hero (OCRE-style)
        cream:
          "bg-cream text-ink hover:bg-white focus-visible:ring-white focus-visible:ring-offset-transparent",
        // Ink-solid — calm, authoritative primary used on the stone hero
        ink:
          "bg-ink text-stone hover:bg-ink/90 focus-visible:ring-ink focus-visible:ring-offset-stone",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        pill: "px-5 py-2 text-[13px] tracking-[0.04em]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type CommonButtonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href"> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in rest && rest.href !== undefined) {
    const { external, href, ...anchorRest } = rest as ButtonAsAnchor;
    const target = external ? "_blank" : anchorRest.target;
    const rel = external ? "noopener noreferrer" : anchorRest.rel;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...anchorRest}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonAsButton)}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
