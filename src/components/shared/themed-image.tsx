import Image from 'next/image';
import classNames from 'classnames';
import { useEffect } from 'react';

type ThemedImageProps = {
  url: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
};

export default function ThemedImage({
  url,
  width,
  height,
  alt,
  className,
}: ThemedImageProps) {
  const urlParts = url?.split('.');
  const lightUrl =
    urlParts?.slice(0, -1).join('.') + '-light.' + urlParts?.at(-1);
  const darkUrl =
    urlParts?.slice(0, -1).join('.') + '-dark.' + urlParts?.at(-1);

  //   useEffect(() => {
  //     console.log(lightUrl);
  //     console.log(darkUrl);
  //   }, []);

  return (
    <>
      <Image
        src={lightUrl}
        width={width}
        height={height}
        alt={alt}
        placeholder="empty"
        className={classNames('block dark:hidden', className)}
      />
      <Image
        src={darkUrl}
        width={width}
        height={height}
        placeholder="empty"
        alt={alt}
        className={classNames('hidden dark:block', className)}
      />
    </>
  );
}
