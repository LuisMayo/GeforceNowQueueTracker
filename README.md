KeforceNowQueueTracker
 (It doesn't currently work)
 Tracks the queues of the different GeForceNow Servers.

## Getting Started

### Prerequisites

 - [Deno](https://deno.land/#installation): Typescript runtime
 - A Geforce Now Account
 - Some way of extracting required information (easiest way is to inspect network calls on https://play.geforcenow.com/)

### Use
 - Copy the secrets.json to mysecrets.json and fill the information. This information may be obtained by checking the "token" and "session" network calls on https://play.geforcenow.com/
 - Launch using deno run --allow-read --allow-net main.ts

## How does it works?

### Flow
1. Get access Token:
POST https://login.nvidia.com/token
As FORM encoded petition with params specified en token-request.ts.
Paramns shall be obtained by looking at them at the network tab of devtools.
Relevant Authentication header will be obtained by appending 'GFNJWT ' + response.id_token
2. Get available servers info: https://prod.cloudmatchbeta.nvidiagrid.net/v2/serverInfo GET unauthenticated
3. For each server:
4. Create a Session. POST petition to the server URL + '/v2/session'. Authenticated
5. Extract Queue length for session. response.seatSetupInfo.queuePosition
6. Delete the session. DELETE to response.sessionControlInfo.ip + response.sessionControlInfo.resourcePath. Authenticated

## Contributing
Since this is a tiny project we don't have strict rules about contributions. Just open a Pull Request to fix any of the project issues or any improvement you have percieved on your own. Any contributions which improve or fix the project will be accepted as long as they don't deviate too much from the project objectives. If you have doubts about whether the PR would be accepted or not you can open an issue before coding to ask for my opinion
