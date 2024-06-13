"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
import { cn } from "@/lib/utils";
type menuItem = {
  title: string;
  href: string;
  description: string;
};

export default function NavigationTabComponents() {
  const menMenuItems: menuItem[] = [
    {
      title: "Gucci Ace Sneaker",
      href: "/docs/primitives/gucci-ace-sneaker",
      description:
        "A stylish and comfortable sneaker designed for everyday wear, featuring Gucci's iconic logo and signature design elements.",
    },
    {
      title: "Gucci Dionysus Bag",
      href: "/docs/primitives/gucci-dionysus-bag",
      description:
        "A luxurious and versatile bag designed for both work and leisure, featuring Gucci's signature tiger head buckle and sleek design.",
    },
    {
      title: "Gucci Bamboo Watch",
      href: "/docs/primitives/gucci-bamboo-watch",
      description:
        "A stylish and functional watch designed for both men and women, featuring Gucci's iconic logo and sleek design.",
    },
    {
      title: "Gucci Ophelia Sunglasses",
      href: "/docs/primitives/gucci-ophelia-sunglasses",
      description:
        "A stylish and protective pair of sunglasses designed for both men and women, featuring Gucci's iconic logo and sleek design.",
    },
    {
      title: "Gucci Horsebit Loafer",
      href: "/docs/primitives/gucci-horsebit-loafer",
      description:
        "A stylish and comfortable loafer designed for both men and women, featuring Gucci's iconic horsebit buckle and sleek design.",
    },
    {
      title: "Gucci Bamboo Wallet",
      href: "/docs/primitives/gucci-bamboo-wallet",
      description:
        "A stylish and functional wallet designed for both men and women, featuring Gucci's iconic logo and sleek design.",
    },
  ];
  const womenMenuItems: menuItem[] = [
    {
      title: "Gucci Bamboo Handbag",
      href: "/docs/primitives/gucci-bamboo-handbag",
      description:
        "A stylish and versatile handbag designed for both work and leisure, featuring Gucci's signature tiger head buckle and sleek design.",
    },
    {
      title: "Gucci Dionysus Clutch",
      href: "/docs/primitives/gucci-dionysus-clutch",
      description:
        "A luxurious and stylish clutch designed for both work and leisure, featuring Gucci's signature tiger head buckle and sleek design.",
    },
    {
      title: "Gucci Bamboo Watch",
      href: "/docs/primitives/gucci-bamboo-watch",
      description:
        "A stylish and functional watch designed for both men and women, featuring Gucci's iconic logo and sleek design.",
    },
    {
      title: "Gucci Ophelia Sunglasses",
      href: "/docs/primitives/gucci-ophelia-sunglasses",
      description:
        "A stylish and protective pair of sunglasses designed for both men and women, featuring Gucci's iconic logo and sleek design.",
    },
    {
      title: "Gucci Horsebit Loafer",
      href: "/docs/primitives/gucci-horsebit-loafer",
      description:
        "A stylish and comfortable loafer designed for both men and women, featuring Gucci's iconic horsebit buckle and sleek design.",
    },
    {
      title: "Gucci Bamboo Wallet",
      href: "/docs/primitives/gucci-bamboo-wallet",
      description:
        "A stylish and functional wallet designed for both men and women, featuring Gucci's iconic logo and sleek design.",
    },
  ];
  const childrenMenuItems: menuItem[] = [
    {
      title: "Gucci Kids Ace Sneaker",
      href: "/docs/primitives/gucci-kids-ace-sneaker",
      description:
        "A stylish and comfortable sneaker designed for kids, featuring Gucci's iconic logo and signature design elements.",
    },
    {
      title: "Gucci Kids Dionysus Bag",
      href: "/docs/primitives/gucci-kids-dionysus-bag",
      description:
        "A luxurious and versatile bag designed for kids, featuring Gucci's signature tiger head buckle and sleek design.",
    },
    {
      title: "Gucci Kids Bamboo Watch",
      href: "/docs/primitives/gucci-kids-bamboo-watch",
      description:
        "A stylish and functional watch designed for kids, featuring Gucci's iconic logo and sleek design.",
    },
    {
      title: "Gucci Kids Ophelia Sunglasses",
      href: "/docs/primitives/gucci-kids-ophelia-sunglasses",
      description:
        "A stylish and protective pair of sunglasses designed for kids, featuring Gucci's iconic logo and sleek design.",
    },
    {
      title: "Gucci Kids Horsebit Loafer",
      href: "/docs/primitives/gucci-kids-horsebit-loafer",
      description:
        "A stylish and comfortable loafer designed for kids, featuring Gucci's iconic horsebit buckle and sleek design.",
    },
    {
      title: "Gucci Kids Bamboo Wallet",
      href: "/docs/primitives/gucci-kids-bamboo-wallet",
      description:
        "A stylish and functional wallet designed for kids, featuring Gucci's iconic logo and sleek design.",
    },
  ];
  const tabs = [
    {
      title: "Men",
      items: menMenuItems,
    },
    {
      title: "Women",
      items: womenMenuItems,
    },
    {
      title: "Children",
      items: childrenMenuItems,
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#9d4e9a12] to-[#FAC4A2] p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-semibold text-white">
                      CHAPA
                    </div>
                    <p className="text-sm leading-tight text-white">
                      Beautifully designed accessories built with professional
                      care and love.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {tabs.map((tab) => (
          <NavigationMenuItem key={tab.title}>
            <NavigationMenuTrigger>{tab.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {tab.items.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
