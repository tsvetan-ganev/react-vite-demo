import { UserSession, ApiError, User } from '../types';

export default class AuthService {
  async login(credentials: User): Promise<UserSession | ApiError> {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      const responseBody = (await response.json()) as unknown as
        | UserSession
        | ApiError;

      return responseBody;
    } catch (error) {
      console.error(error);

      return {
        error: {
          message: (error as Error).message,
        },
      } satisfies ApiError;
    }
  }

  updateLastUsernameUsed(username: string) {
    localStorage.setItem('lastUsername', username);
  }

  getLastUsernameUsed() {
    return localStorage.getItem('lastUsername');
  }
}
