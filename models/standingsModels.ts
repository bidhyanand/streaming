
export interface standingsModal {
    group: string;
    teams: {
        name: string;
    }[]
}

export interface Standings{
    data : standingsModal[];
}

export interface standingsModalProps {
    group: string;
    teams: {
        name: string;
        matchesPoint: number;
        won: number;
        draw: number;
        lost: number;
        goalsFor: number;
        goalsAgainst: number;
        goalDifference: number;
        points: number;
    }[]
}

export interface StandingsProps{
    data : standingsModalProps[];
}