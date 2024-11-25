import { PropsWithChildren } from 'react';
import './Card.scss';

export default function Card(props: PropsWithChildren) {
  return <div className="Card">{props.children}</div>;
}
