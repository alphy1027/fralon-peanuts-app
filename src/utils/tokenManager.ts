type TokenType = string | null;

let accessToken: TokenType;

export const tokenManager = {
  setToken(token: TokenType) {
    accessToken = token;
  },
  getToken(): TokenType {
    return accessToken;
  },
};
