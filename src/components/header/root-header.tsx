'use client';

import { NavBar } from '@components/header/nav-bar';
import { ThemeSwitcherButton } from '@components/theme/theme-button';
import { MeAvatar } from '@components/me-avatar';
import GHProfileButton from '@/components/profilebuttons/github-profile-button';
import LinkedInProfileButton from '@components/profilebuttons/li-profile-button';
import { SideSheet } from './side-sheet';

export default function RootHeader() {
  return (
    <div className="flex justify-between sticky top-0 z-10 items-center p-4 backdrop-blur-sm border-b border-b-accent">
      <div className=" items-center justify-center flex">
        <div className="pr-2">
          <MeAvatar />
        </div>
        <text className="text-2xl font-bold">Jacob Maizel</text>
      </div>

      <div className="flex md:hidden justify-center items-center">
        <SideSheet />
      </div>
      <div className="hidden md:flex">
        <div className="flex justify-center items-center">
          <div className="flex">
            <NavBar orientation="horizontal" />
          </div>
          <div className="flex justify-center items-center">
            <div className="px-4">
              <GHProfileButton />
            </div>
            <div className="px-4">
              <LinkedInProfileButton />
            </div>
          </div>
          <div className="flex pl-4">
            <ThemeSwitcherButton />
          </div>
        </div>
      </div>
    </div>
  );
}
