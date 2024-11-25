import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import TextField from './components/TextField';

// TODO: Poppins font
function App() {
  return (
    <Card>
      <h1>Sign In To Your Account</h1>
      <form>
        <TextField id="username" label="Username" type="email" />
        <TextField id="password" label="Password" type="password" />
        <Checkbox id="remember-me">Remember me</Checkbox>
      </form>

      <Button
        onClick={() => {
          console.log('clicked');
        }}
      >
        Login Now
      </Button>
    </Card>
  );
}

export default App;
