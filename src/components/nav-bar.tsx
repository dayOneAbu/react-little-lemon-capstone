import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle";


const links: {
  title: string;
  href: string;

}[] = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Menu",
      href: "/menu",
    },
    {
      title: "Reservations",
      href: "/reservation",
    },
    {
      title: "Order Online",
      href: "/order-online",
    },

  ]

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map(link => (
          <NavigationMenuItem key={link.href}>
            {link.title}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <ModeToggle />
    </NavigationMenu>
  )
}
