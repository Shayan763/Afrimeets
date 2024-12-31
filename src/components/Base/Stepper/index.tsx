"use client";
interface propsType {
  Data: {
    title: string;
    description: string;
  }[];
  state: number;
  setState: (state: number) => void;
}
export default function Stepper(props: propsType) {
  const { state, Data } = props;

  return (
    <div className="">
      <div className="flex items-center justify-">
        {Data.map((item, index) => (
          <div key={index} className="w-full flex items-center ">
            {index > 0 ? (
              <div className="border-2 border-primary w-[calc(50%-30px)] h-0" />
            ) : (
              <div className="w-[calc(50%-30px)] h-0" />
            )}
            <div className="flex flex-col relative">
              <div
                className={`rounded-full select-none w-[60px] h-[60px] transition-all flex border font-semibold border-primary justify-center items-center ${
                  state == index
                    ? "bg-primary text-white"
                    : " border-[3px] border-primary"
                } text-xl`}
              >
                {item.title}
              </div>
              {state == index ? (
                <div className="absolute bottom-[-50%] text-primary font-normal text-center truncate">
                  {item.description}
                </div>
              ) : null}
            </div>
            {index != Data.length - 1 ? (
              <div className="border-2 border-primary w-[calc(50%-30px)]" />
            ) : (
              <div className="w-[calc(50%-30px)]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
