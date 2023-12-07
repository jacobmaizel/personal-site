import Image from 'next/image';
import Link from 'next/link';
import ThemedImage from '../shared/themed-image';

export default function GithubProfileButton() {
  return (
    <div className="flex">
      <a
        href="https://github.com/jacobmaizel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ThemedImage
          url="/github.svg"
          width={100}
          height={100}
          alt="Github Icon"
          className="h-[2rem] w-[2rem]"
        />
      </a>
    </div>
  );
}
