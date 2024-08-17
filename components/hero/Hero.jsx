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
        <h1 className="entete-title-text entete-title-h1 " >
          <span className="entete-span ">
            {props.text1}
          </span>
          <span className="entete-span ">
            {props.text2}
          </span>
        </h1>
        <h2 className="entete-title-text entete-title-h2" >
          <span className="entete-span ">
            {props.text3}
          </span>
          <span className="entete-span ">
            {props.text4}
          </span>
        </h2>
      </div>
    </div>
  );
}
