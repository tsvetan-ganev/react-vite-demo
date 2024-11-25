import './LoadingIndicator.scss';

export default function LoadingIndicator(props: {
  style?: React.CSSProperties;
}) {
  return <div className="LoadingIndicator" style={props.style}></div>;
}
