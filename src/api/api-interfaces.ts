interface Result {
  [key: string]: unknown;
}

export interface ProjectData {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: Result[];
}

export interface AccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}
