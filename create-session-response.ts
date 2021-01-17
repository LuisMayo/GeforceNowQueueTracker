export interface CreateSessionResponse {
    session:           Session;
    requestStatus:     RequestStatus;
    otherUserSessions: any[];
}

export interface RequestStatus {
    countryCode:       null;
    unifiedErrorCode:  number;
    requestId:         string;
    serverId:          string;
    statusDescription: string;
    statusCode:        number;
}

export interface Session {
    status:                        number;
    sessionControlInfo:            SessionControlInfo;
    connectionInfo:                null;
    sessionRequestData:            SessionRequestData;
    finalSelectedScreenResolution: null;
    errorCode:                     number;
    enhancedStreamMode:            number;
    sessionId:                     string;
    seatSetupInfo:                 SeatSetupInfo;
    clientIp:                      string;
    gpuType:                       string;
    monitorSettings:               null;
    userIdleWarningTimeoutInMs:    number;
}

export interface SeatSetupInfo {
    queuePosition: number;
    seatSetupStep: number;
    seatSetupEta:  number;
}

export interface SessionControlInfo {
    protocol:         number;
    appLevelProtocol: number;
    ip:               string;
    resourcePath:     string;
    usage:            number;
    port:             number;
}

export interface SessionRequestData {
    audioMode:                     number;
    remoteControllersBitmap:       number;
    sdrHdrMode:                    number;
    networkTestSessionId:          string;
    availableSupportedControllers: null;
    clientVersion:                 string;
    partnerCustomData:             string;
    deviceHashId:                  string;
    internalTitle:                 null;
    clientPlatformName:            string;
    metaData:                      MetaDatum[];
    surroundAudioInfo:             number;
    clientTimezoneOffset:          number;
    preferredController:           number;
    clientIdentification:          string;
    parentSessionId:               null;
    appId:                         number;
    streamerVersion:               string;
    clientRequestMonitorSettings:  ClientRequestMonitorSetting[];
    appLaunchMode:                 number;
    sdkVersion:                    string;
    enhancedStreamMode:            number;
    useOps:                        boolean;
    secureRTSPSupported:           boolean;
    clientDisplayHdrCapabilities:  null;
}

export interface ClientRequestMonitorSetting {
    monitorId:       number;
    positionX:       number;
    positionY:       number;
    heightInPixels:  number;
    sdrHdrMode:      number;
    framesPerSecond: number;
    dpi:             number;
    widthInPixels:   number;
}

export interface MetaDatum {
    key:   string;
    value: string;
}
