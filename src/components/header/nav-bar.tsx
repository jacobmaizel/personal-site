import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Divider } from '../ui/divider';
import { SheetClose } from '../ui/sheet';
import { allProjects } from '@/common/projects';

interface Props {
  orientation: 'horizontal' | 'vertical';
  open?: boolean;
  setOpen?: (open: boolean) => void;
}
export function NavBar({ orientation, open, setOpen }: Props) {
  // handle link press function
  const handleLinkPress = () => {
    if (open && setOpen) {
      setOpen(false);
    }
  };

  return (
    <div className="">
      <NavigationMenu orientation={orientation}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={handleLinkPress}
              >
                <text className="text-2xl md:text-base">Home</text>
              </NavigationMenuLink>
            </Link>
            <div className="md:hidden">
              <Divider padding={'py-2'} width={'w-[60px]'} />
            </div>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={handleLinkPress}
              >
                <text className="text-2xl md:text-base">About me</text>
              </NavigationMenuLink>
            </Link>

            <div className="md:hidden">
              <Divider padding={'py-2'} width={'w-[60px]'} />
            </div>
          </NavigationMenuItem> */}
          {/* PROJECTS */}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-2xl md:text-base">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {allProjects
                  .filter(project => {
                    return project.featured;
                  })
                  .map(project => (
                    <ListItem
                      key={project.title}
                      title={project.title}
                      href={project.href}
                    >
                      {project.description}
                    </ListItem>
                  ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* END PROJECTS */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',

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
ListItem.displayName = 'ListItem';
