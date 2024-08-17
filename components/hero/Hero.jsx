export default function Hero(props) {
  return (
    <div
      className={`entete mx-auto`}
      style={{
        backgroundImage: `url(${props.bgImg.src})`,
        color: `${props.color}`,
      }}
    >
      <div className="entete-title text-nowrap">
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
