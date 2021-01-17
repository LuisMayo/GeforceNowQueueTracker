export interface ServerInfoResponse {
    authType:            number[];
    notificationTopicId: string[];
    serverType:          number;
    version:             Version;
    metaData:            MetaDatum[];
    requestStatus:       RequestStatus;
    monitorSettings:     MonitorSetting[];
}

/**
 * Names and URLs of the aviable servers
 */
export interface MetaDatum {
    /**
     * Name of server
     */
    key:   string;
    /**
     * URL of server
     */
    value: string;
}

export interface MonitorSetting {
    monitorId:       number;
    positionX:       number;
    positionY:       number;
    heightInPixels:  number;
    sdrHdrMode:      number;
    framesPerSecond: number;
    dpi:             number;
    widthInPixels:   number;
}

export interface RequestStatus {
    unifiedErrorCode:  number;
    requestId:         string;
    serverId:          string;
    statusDescription: string;
    statusCode:        number;
}

export interface Version {
    name:                 string;
    buildVersion:         string;
    zoneVersion:          string;
    protocolMinorVersion: number;
    buildDateTime:        string;
    protocolMajorVersion: number;
}
