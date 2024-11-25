import React, { PropsWithChildren } from 'react';
import './Card.css';

export default function Card(props: PropsWithChildren) {
  return <div className="Card">{props.children}</div>;
}
