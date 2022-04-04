import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Text, Spacer, useTheme, Link } from "@nextui-org/react";

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value || "red",
      }}>
      <NextLink href='/' passHref>
        <Link
          css={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
          }}>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
            alt='Pokemon'
            width={80}
            height={80}
          />

          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href='/favorites' passHref>
        <Link>
          <Text color='white' h4>
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
