import { SubmitHandler, useForm } from 'react-hook-form';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import TextField from './components/TextField';
import passwordValidator from './validators/password.validator';
import emailValidator from './validators/email.validator';

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const loginFormDataDefaultValues: LoginFormData = {
  username: '',
  password: '',
  rememberMe: false,
};

// TODO: Poppins font
function App() {
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    defaultValues: loginFormDataDefaultValues,
  });
  const { errors } = formState;
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <Card>
      <h1 className="card-title">Sign In To Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Username"
          type="email"
          {...register('username', {
            required: {
              message: 'Enter an email address.',
              value: true,
            },
            validate: {
              email: emailValidator,
            },
          })}
          error={errors.username}
        />
        <TextField
          label="Password"
          type="password"
          {...register('password', {
            required: {
              message: 'Enter a password',
              value: true,
            },
            validate: {
              passwordComplexity: passwordValidator,
            },
          })}
          error={errors.password}
        />
        <Checkbox id="remember-me" {...register('rememberMe')}>
          Remember me
        </Checkbox>
        <Button type="submit">Login Now</Button>
      </form>
    </Card>
  );
}

export default App;
