'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <text className="text-lg font-bold">404 - Page not found :(</text>
      {/* <button onClick={() => reset()}>Try again</button> */}
    </div>
  );
}
