import { CreateSessionRequestMin, SessionRequestData } from "./create-session-request-min.ts";
import { CreateSessionResponse } from "./create-session-response.ts";
import { ServerInfoResponse } from "./serverInfo-response.ts";
import { TokenResponse } from "./token-response.ts";
const secrets = JSON.parse(await Deno.readTextFile('./mysecrets.json'));

// GET ACCESS TOKEN
const params = new URLSearchParams();
params.set('grant_type', 'urn:ietf:params:oauth:grant-type:client_token');
params.set('client_token', secrets.client_token);
params.set('client_id', secrets.client_id);
params.set('sub', secrets.sub);

const request = fetch('https://login.nvidia.com/token', { method: 'POST', body: params });
const tokenResponse: TokenResponse = await (await request).json();
// End of getting it


const token = 'GFNJWT ' + tokenResponse.id_token;

// Get server list
const serverInfo: ServerInfoResponse = await (await fetch('https://prod.cloudmatchbeta.nvidiagrid.net/v2/serverInfo')).json();

// Create-then-delete sessions in order to get the queue
for (const server of serverInfo.metaData.filter(value => value.value.startsWith('http'))) {
    const sessionURL = server.value + '/v2/session';
    // We create a session
    const body = new CreateSessionRequestMin(new SessionRequestData(secrets.deviceHashId, secrets.appId, secrets.SubSessionId));
    try {
        const request = fetch(sessionURL, { method: 'POST', body: JSON.stringify(body), headers: { 'Authorization': token } });
        const httpResponse = await request;
        console.log(httpResponse.statusText, httpResponse.status);
        if (httpResponse.status !== 200) {
            Deno.exit(1);
        }
        const response: CreateSessionResponse = await httpResponse.json();
        // We get the seat number
        console.log(server.key, response.session.seatSetupInfo.queuePosition - 1);
        // We destroy the session (if possible)
        if (response.session.sessionControlInfo.ip) {
            const deleteRequest = fetch('https://' + response.session.sessionControlInfo.ip + response.session.sessionControlInfo.resourcePath, { method: 'DELETE', headers: { 'Authentication': token } });
            const deleteResponse = (await request).statusText;
        }
    } catch (e) {
        console.error(e);
    }
}