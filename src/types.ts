export interface User {
  username: string;
  password: string;
}

export interface UserSession {
  username: string;
  sessionId: string;
}

export interface ApiError {
  error: {
    message: string;
  };
}
