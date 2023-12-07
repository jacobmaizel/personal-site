import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { RowsIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { NavBar } from './nav-bar';
import GithubProfileButton from '../profilebuttons/github-profile-button';
import LinkedInProfileButton from '../profilebuttons/li-profile-button';
import { Divider } from '../ui/divider';
import { ThemeSwitcherButton } from '../theme/theme-button';
import { useState } from 'react';

export function SideSheet() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="flex scale-150">
          <HamburgerMenuIcon />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <div className="flex justify-center items-center mt-8">
          <div className="px-4">
            <GithubProfileButton />
          </div>
          <div className="px-4">
            <LinkedInProfileButton />
          </div>
          <div className="flex pl-4">
            <ThemeSwitcherButton />
          </div>
        </div>
        <div className="mt-4">
          <NavBar orientation="vertical" open={open} setOpen={setOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
