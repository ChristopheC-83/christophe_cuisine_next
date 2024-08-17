import Header from "../header/Header";

export default function Hero(props) {
  return (
    <div
      className={`entete mt-24 xs:mt-18 md:mt-0`}
      style={{
        backgroundImage: `url(${props.bgImg.src})`,
        color: `${props.color}`,
      }}
    >
      <Header />
      <div className="entete-title text-nowrap md:pt-[140px]">
        <div className={`xs:my-3 sm:my-4 md:my-6 lg:my-8`}>
          <h1 className="entete-title-text entete-title-h1 ">
            <span>{props.text1}</span>
            <span>{props.text2}</span>
          </h1>
        </div>
        <h2 className="entete-title-text entete-title-h2">
          <span>{props.text3}</span>
          <span>{props.text4}</span>
        </h2>
      </div>
    </div>
  );
}
