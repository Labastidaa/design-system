import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button/Button";
import React from "react";
import { useStore } from "@/hooks/useStore";

const MobileNav: React.FC = () => {
  const { dispatch } = useStore();

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-[100vh] w-screen overflow-hidden bg-black p-40 lg:hidden xl:hidden">
      <div className="flex items-center justify-between p-24">
        <div className="nav">
          <Link to="/" className="[&.active]:font-bold">
            <img src="/cube2.svg" alt="cube" className="h-48 w-48" />
          </Link>
        </div>

        <Button variant="ghost" onClick={toggleMenu} className="text-white">
          <img src="/cross.svg" alt="close icon" className="h-32 w-32" />
        </Button>
      </div>
      <div className="h-full w-full">
        <ul className="flex h-full w-full flex-col items-center justify-start gap-100 p-40 text-2xl font-medium">
          <li>
            <div className="flex h-48 w-fit items-center justify-center rounded-[12px] px-24">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-muted hover:text-foreground-hover [&.active]:text-foreground"
              >
                Home
              </Link>
            </div>
          </li>
          <li>
            <div className="flex h-48 w-fit items-center justify-center rounded-[12px] px-24">
              <Link
                to="/design-system"
                onClick={toggleMenu}
                className="text-muted hover:text-foreground-hover [&.active]:text-foreground"
              >
                Design System
              </Link>
            </div>
          </li>
          <li>
            <div className="flex h-48 w-fit items-center justify-center rounded-[12px] px-24">
              <Link
                to="/component-library"
                onClick={toggleMenu}
                className="text-muted hover:text-foreground-hover [&.active]:text-foreground"
              >
                Component Library
              </Link>
            </div>
          </li>
          <li className="w-full">
            <Button
              variant="white"
              size="large"
              className="flex w-full justify-center gap-8"
            >
              <GitHubLogoIcon width={24} height={24} color="black" />
              <a
                href="www.github.com"
                className="text-muted hover:text-black"
                target="_blank"
              >
                View on Github
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
