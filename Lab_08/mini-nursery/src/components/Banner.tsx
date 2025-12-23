import React from "react";

interface BannerProps {
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="container-fluid p-5 mb-4 bg-light rounded-3 border">
      <div className="container py-2 text-center">
        {children}
        <p className="lead text-muted">
          Manage your plant collection efficiently and effortlessly.
        </p>
      </div>
    </div>
  );
};

export default Banner;
