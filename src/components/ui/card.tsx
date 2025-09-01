import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomCard: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`rounded-lg border border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

interface CustomCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomCardHeader: React.FC<CustomCardHeaderProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CustomCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomCardTitle: React.FC<CustomCardTitleProps> = ({
  children,
  className = "",
}) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

interface CustomCardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomCardDescription: React.FC<CustomCardDescriptionProps> = ({
  children,
  className = "",
}) => {
  return <p className={`text-gray-400 ${className}`}>{children}</p>;
};

interface CustomCardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomCardContent: React.FC<CustomCardContentProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};
