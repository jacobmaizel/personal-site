import Image from 'next/image';
import Link from 'next/link';
export default function LinkedInProfileButton() {
  return (
    <div className="flex">
      <a
        href="https://www.linkedin.com/in/jacobmaizel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/li-blue-128.png"
          width={30}
          height={30}
          alt="Icon"
          className="block dark:hidden h-[2rem] w-[2rem]"
        />
        <Image
          src="/li-white-128.png"
          width={30}
          height={30}
          alt="Icon"
          className="hidden dark:block h-[2rem] w-[2rem]"
        />
      </a>
    </div>
  );
}
