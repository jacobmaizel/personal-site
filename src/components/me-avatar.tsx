import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export function MeAvatar() {
  return (
    <Link href="/" passHref>
      <Avatar>
        <AvatarImage src="/apple-touch-icon.png" alt="@jacobmaizel" />
        <AvatarFallback>JM</AvatarFallback>
      </Avatar>
    </Link>
  );
}
