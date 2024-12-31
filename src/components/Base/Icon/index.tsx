import BaseImage from "@/components/Base/BaseImage";

interface propsType {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  className?: string;
}
export default function Icon(props: propsType) {
  const { src, alt, className, width, height } = props;
  return (
    <div className="">
      <BaseImage
        className={`${className}`}
        src={`/../../../public/assets/icons/${src}`}
        alt={alt ?? "image"}
        width={width ?? 25}
        height={height ?? 25}
      />
    </div>
  );
}
