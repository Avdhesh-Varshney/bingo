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
} from "@nextui-org/react";
import logo from "../../assets/img/logo.png";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About", path: "/about" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-md py-1"
    >
      <NavbarContent className="md:hidden text-white p-2" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={logo} alt="Logo" width={59} height={52} sizes="100vw" />
          <p className="ml-2 text-inherit tracking-wider font-mono text-blue-400 font-bold text-3xl">
            BINGO
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src={logo} alt="Logo" width={59} height={52} sizes="100vw" />
          <p className="ml-2 text-inherit tracking-wider font-mono text-blue-400 font-bold text-3xl">
            BINGO
          </p>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.path} className="text-white">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="max-w-7xl p-5 bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="text-white cursor-pointer block px-4 py-2">
            <Link href={item.path} className="w-full">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

  );
};

export default Nav;
