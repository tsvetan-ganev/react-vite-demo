import { http, HttpResponse, PathParams, delay } from 'msw';
import { User } from '../types';
import { mockUsers } from './data';

const DELAY_TIME_MS = 3000;

const delayResponses = http.all('*', async () => {
  await delay(DELAY_TIME_MS);
});

const loginEndpoint = http.post<PathParams, Partial<User>>(
  '/auth/login',
  async ({ request }) => {
    const body = await request.json();

    if (!body.username || !body.password) {
      return HttpResponse.json(
        { error: { message: 'You must provide username and password.' } },
        { status: 422 }
      );
    }

    const userFound = mockUsers.find(
      (user) =>
        user.password === body.password && user.username === body.username
    );

    if (!userFound) {
      return HttpResponse.json(
        { error: { message: 'Invalid credentials.' } },
        { status: 401 }
      );
    }

    return HttpResponse.json(
      {
        username: userFound.username,
        sessionId: crypto.randomUUID(),
      },
      { status: 200 }
    );
  }
);

export const handlers = [delayResponses, loginEndpoint];
