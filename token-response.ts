export interface TokenResponse {
    access_token: string;
    token_type:   string;
    expires_in:   number;
    client_token: string;
    id_token:     string;
}
