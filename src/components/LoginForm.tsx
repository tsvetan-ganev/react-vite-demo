import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

import './LoginForm.scss';
import type AuthService from '../services/auth.service';
import emailValidator from '../validators/email.validator';
import passwordValidator from '../validators/password.validator';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import TextField from './TextField';
import { UserSession } from '../types';

export interface LoginFormProps {
  authService: AuthService;
  onLoggedIn: (session: UserSession & { rememberMe: boolean }) => void;

  lastUsernameUsed: string | null;
}

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

export default function LoginForm(props: LoginFormProps) {
  const { authService, onLoggedIn, lastUsernameUsed } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState<
    string | undefined
  >(undefined);
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    defaultValues: {
      ...loginFormDataDefaultValues,
      username: lastUsernameUsed ?? '',
    },
  });

  const { errors } = formState;
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      setIsLoading(true);
      setServerErrorMessage(undefined);

      const loginResponse = await authService.login(data);

      if ('error' in loginResponse) {
        return setServerErrorMessage(loginResponse.error.message);
      } else {
        setServerErrorMessage(undefined);
        return onLoggedIn({ ...loginResponse, rememberMe: data.rememberMe });
      }
    } catch (error) {
      setServerErrorMessage((error as Error).message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="card-title">Sign In To Your Account</h1>
        <fieldset disabled={isLoading}>
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
                message: 'Enter a password.',
                value: true,
              },
              validate: {
                passwordComplexity: passwordValidator,
              },
            })}
            error={errors.password}
          />
          <Checkbox {...register('rememberMe')}>Remember me</Checkbox>

          {Boolean(serverErrorMessage) && (
            <div role="alert">{serverErrorMessage}</div>
          )}
        </fieldset>
        <Button type="submit" disabled={isLoading}>
          {!isLoading ? 'Login Now' : 'Loading...'}
        </Button>
      </form>
    </Card>
  );
}
