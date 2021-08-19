import "./skeleton.css";

export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__img"></div>
      <div className="skeleton__description">
        <div className="skeleton__title"></div>
        <div className="skeleton__text"></div>
        <div className="skeleton__text"></div>
      </div>
    </div>
  );
}
