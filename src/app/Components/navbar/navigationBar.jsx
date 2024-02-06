"use client";

import React from "react";
import styles from "./navbar.module.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import SignInButton from "../authButtons/signInButton";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "../authButtons/signOutButton";
import Image from "next/image";

const NavigationBar = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Navbar>
      <NavbarBrand>
        <Image src='/assets/uni_logo.png' height={130} width={130} alt="univeristy_logo"/>
        {/* <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
         <p className="text-inherit text-2xl font-medium text-gray">Student Attendance Portal</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;