export class TokenRequest {
    grant_type: string = 'urn:ietf:params:oauth:grant-type:client_token';
    constructor(private client_token: string, private client_id: string, private sub: string) { }
}