import './TextField.css';

export interface TextFieldProps {
  label: string;
  type: 'text' | 'password' | 'email';
  id: string;
  disabled?: boolean;
}

export default function TextField(props: TextFieldProps) {
  const { id, label, type, disabled } = props;

  return (
    <div className="TextField">
      <input id={id} type={type} disabled={disabled} placeholder="" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
