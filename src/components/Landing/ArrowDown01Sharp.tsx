import Image from "next/image";

type ArrowDown01SharpProps = {
  className?: string;
}

const ArrowDown01Sharp = ({ className }: ArrowDown01SharpProps) => {
  return (
    <div className={className}>
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
        <div className="absolute inset-[-18.75%_-9.38%_-13.57%_-9.38%]">
          <Image alt="Arrow Down Elements" className="block max-w-none w-full h-full" src="/images/arrow-down-elements.svg" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default ArrowDown01Sharp;