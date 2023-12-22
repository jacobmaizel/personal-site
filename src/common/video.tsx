export function Video(props: { src: string }) {
  return (
    <div className="">
      {' '}
      <iframe
        className="rounded-lg aspect-video w-full md:w-3/4 lg:w-1/2 xl:w-1/3"
        src={props.src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />{' '}
    </div>
  );
}
