import { Button } from '../ui/button';
import ThemedImage from './themed-image';
import classNames from 'classnames';

type GHProjectButtonProps = {
  href: string;
  className?: string;
};
// E9EBEF -> light mode grey
// #292F34 -> dark mode grey
export function GHProjectButton({ href, className }: GHProjectButtonProps) {
  return (
    <div className="flex justify-center items-center text-center">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button className=" bg-[#E9EBEF] hover:bg-[#babdc3] dark:bg-[#292F34] dark:hover:bg-[#353d43]">
          <div className="flex items-center justify-center">
            <ThemedImage
              url="/github.svg"
              width={100}
              height={100}
              alt="Github Icon"
              className={classNames('', className)}
            />
            <text className="ml-1 text-foreground">Github</text>
          </div>
        </Button>
      </a>
    </div>
  );
}
