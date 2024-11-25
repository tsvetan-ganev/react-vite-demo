import { UserSession } from '../types';
import Button from './Button';
import Card from './Card';
import './UserCard.scss';

export interface UserCardProps {
  user: UserSession;
  onLogout: () => void;
}

export default function UserCard(props: UserCardProps) {
  const { user, onLogout } = props;
  return (
    <Card>
      <div className="logged-in">
        <h1>Hi, {user.username} 🤟!</h1>
        <Button type="button" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </Card>
  );
}
