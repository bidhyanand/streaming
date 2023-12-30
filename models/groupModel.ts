export interface GroupModal {
    group: string;
    teams: {
        name: string;
        placement: string;
        // flagImage:string;
    }[]
}

export interface GroupsDivison{
    data : GroupModal[];
}

export interface standingModal {
    name: string
}