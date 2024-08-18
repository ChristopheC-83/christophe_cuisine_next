import Image from "next/image";

export default function TextFrame({ text, img, index, children }) {
  console.log(text);

  return (
    <div
      className={`flex max-md:flex-col-reverse max-md:items-center ${
        index % 2 === 1 ? "flex-row-reverse" : ""
      } my-8 md:my-12 gap-6 mx-2 xs:mx-3 md:mx-4`}
    >
      <p className={`p  w-[88vw] max-w-[460px] md:max-w-[688px] md:w-7/12`}>
        {text}
      </p>
      {/* <Image src={img} alt="cuisine" width={400} height={225} className={`w-2/6 rounded-xl shadow-xl`} /> */}
      <div className="border-2 border-red-200 grow midFlex">
        <div
          className="w-[90vw] h-[68vw] md:w-[45vw] md:h-[34vw] max-w-[460px] max-h-[345px] bg-center bg-cover box-shadow-5 rounded-xl "
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </div>
  );
}
