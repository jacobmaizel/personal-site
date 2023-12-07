import classnames from 'classnames';
export function Divider({ width, padding }: any) {
  return (
    <div className={classnames('flex justify-center items-center', padding)}>
      <div className={classnames('w-1/2 h-0.5 bg-accent', width)}></div>
    </div>
  );
}
