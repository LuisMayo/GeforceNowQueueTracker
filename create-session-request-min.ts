export class CreateSessionRequestMin {
    constructor(private sessionRequestData: SessionRequestData) { }
}

export class SessionRequestData {
    appLaunchMode: number = 1;
    // Obtain it from your own device
    audioMode = 2;
    availableSupportedControllers = [2];
    clientRequestMonitorSettings = [{ heightInPixels: 1080, framesPerSecond: 60, widthInPixels: 1920 }];
    clientTimezoneOffset = 0;
    clientVersion: string = '15.0';
    clientPlatformName: string = 'browser';
    clientIdentification: string = 'GFN-PC';
    enchancedStreamMode = 1;
    metaData: any[];
    streamerVersion: number = 1;
    preferredController = 2;
    remoteControllersBitmap = 0;
    sdkVersion: string = '1.0';
    sdrHdrMode = 0;
    surroundAudioInfo = 0;
    useOps = true;
    constructor(public deviceHashId: string, public appId: string, subSessionID: string) {
        this.metaData = [
            {key: "isAppLaunchEnabled", value: "True"},
            {key: "GSStreamerType", value: "WebRTC"},
            {key: "SubSessionId", value: subSessionID},
            {key: "wssignaling", value: "1"}
        ];
    }
}
