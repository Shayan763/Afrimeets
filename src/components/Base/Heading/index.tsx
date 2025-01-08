import { twMerge } from "tailwind-merge";

interface PropsType {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: JSX.Element | string | (JSX.Element | string)[];
  title?: string;
  Lable?: string;
}

const baseClasses = [
  "text-[1.5rem] whitespace-nowrap text-ellipsis font-bold z-50",
  "text-[1.3rem] whitespace-nowrap text-ellipsis font-semibold z-50",
  "text-[1.2rem] whitespace-nowrap text-ellipsis font-medium z-50",
  "text-[1.1rem] whitespace-nowrap text-ellipsis font-medium z-50",
  "text-[1rem] whitespace-nowrap text-ellipsis font-medium z-50",
  "text-[0.9rem] whitespace-nowrap text-ellipsis font-medium z-50",
];

export default function Heading({ level, className, children, title }: PropsType) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag title={title} className={twMerge(baseClasses[level - 1], className)}>{children}</Tag>
  );
}
