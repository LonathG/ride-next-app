import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-screen overflow-hidden bg-[#FE6334] text-[#FEE832] px-4" // added horizontal padding
    >
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[0.7]">
        {/* RIDE large text */}
        <div className="text-[34vw]">RIDE</div>
        
        {/* YOUR ENERGY split for responsive layout */}
        <div className="grid gap-[3vw] text-[44vw] md:flex md:text-[11vw]">
          <span className="inline-block">YOUR </span>
          <span className="inline-block max-md:text-[27vw]">ENERGY </span>
        </div>

        {/* HIGH large text */}
        <div className="text-[32vw]">HIGH</div>
      </h2>
    </section>
  );
};

export default BigText;
