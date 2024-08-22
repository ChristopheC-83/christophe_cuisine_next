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
      <div className={`entete-title text-nowrap md:pt-[140px]  ${props.color==="#111111" ? "whiteShadow" : "blackShadow"} `}>
        <div className={`xs:my-0 sm:my-3 md:my-16 lg:my-20`}>
          <h1 className="translate-x-[-150px] entete-title-text entete-title-h1 apparitionH1 opacity-0">
            <span>{props.text1}</span>
            <span>{props.text2}</span>
          </h1>
        </div>
        <h2 className="translate-x-[150px] entete-title-text entete-title-h2 apparitionH2 opacity-0">
          <span>{props.text3}</span>
          <span>{props.text4}</span>
        </h2>
      </div>
    </div>
  );
}
