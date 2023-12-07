import { type ProjectPlatform } from '@/types/project';
import Image from 'next/image';
import ThemedImage from './themed-image';

export default function PlatformIcon({
  platform,
}: {
  platform: ProjectPlatform;
}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <ThemedImage
          url={platform.url}
          width={30}
          height={30}
          alt={platform.name}
        />
        <text className="text-xs text-muted-foreground">{platform.name}</text>
      </div>
    </>
  );
}
