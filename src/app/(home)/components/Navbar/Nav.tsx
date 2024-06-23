"use client";

import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

// import Link from "next/link";
import "./Navbar.css";
import logo from "../../../../images/logo-1.png";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Contact", "Log-In", "Sign-Up"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="nav-container pb-2"
    >
      <NavbarContent className="md:hidden text-white p-2" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={logo} alt="Logo" width={59} height={52} />
          <p className="ml-2 text-inherit tracking-wider font-mono text-orange-500 font-bold text-3xl">
            BINGO
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src={logo} alt="Logo" width={59} height={52} />
          <p className="ml-2 text-inherit tracking-wider font-mono text-orange-500 font-bold text-3xl">
            BINGO
          </p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="text-white" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            href="/log-in"
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Log In
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            href="/sign-up"
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="nav-menu">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className={
              item === "Log-In" || item === "Sign-Up"
                ? "nav-menu-item orange-bg"
                : "nav-menu-item"
            }
          >
            <Link
              className="w-full"
              href={
                item === "Home"
                  ? "/"
                  : item === "About"
                  ? "/about"
                  : item === "Contact"
                  ? "/contact"
                  : item === "Log-In"
                  ? "/log-in"
                  : "/sign-up"
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
