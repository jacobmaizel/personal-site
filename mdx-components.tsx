import type { MDXComponents, MDXProps } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: props => (
      <h1 className=" scroll-mt-20 text-4xl font-extrabold my-6" {...props}>
        {props.children}
      </h1>
    ),
    h2: props => (
      <h2 className="scroll-mt-20  text-3xl font-bold my-4" {...props}>
        {props.children}
      </h2>
    ),
    h3: props => (
      <h3 className="scroll-mt-20  text-xl font-semibold my-2" {...props}>
        {props.children}
      </h3>
    ),
    h4: props => (
      <h4 className="scroll-mt-20  text-lg font-semibold my-2" {...props}>
        {props.children}
      </h4>
    ),
    p: props => (
      <p className="text-base leading-snug" {...props}>
        {props.children}
      </p>
    ),
    img: (props: any) => <Image className=" w-full h-full" {...props} />,
    a: (props: any) => (
      <a className=" text-blue-500" {...props}>
        {props.children}
      </a>
    ),
    span: props => (
      <span className="" {...props}>
        {props.children}
      </span>
    ),
    ol: props => (
      <ol className=" list-decimal list-inside" {...props}>
        {props.children}
      </ol>
    ),
    li: props => (
      <li className=" text-base " {...props}>
        {props.children}
      </li>
    ),
    ul: props => (
      <ul className=" list-disc list-inside" {...props}>
        <div className="ml-4">{props.children}</div>
      </ul>
    ),

    code: props => (
      <code
        className="text-sm font-mono bg-accent rounded-md p-1 m-0"
        {...props}
      />
    ),

    ...components,
  };
}
