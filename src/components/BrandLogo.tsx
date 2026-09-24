import React from "react";

const heights = {
  sm: "h-11",
  md: "h-14",
  lg: "h-16",
} as const;

interface BrandLogoProps {
  size?: keyof typeof heights;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  className = "",
}) => {
  return (
    <img
      src="/images/luma-pay-official-logo.png"
      alt="Luma Pay"
      width={1685}
      height={1260}
      className={`${heights[size]} w-auto max-w-none object-contain ${className}`}
    />
  );
};

export default BrandLogo;
