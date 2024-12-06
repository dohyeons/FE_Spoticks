export interface BaseMatch {
  gameId: number;
  gameStartTime: string;
  homeTeamName: string;
  awayTeamName: string;
  stadiumName: string;
  timeOnSale: string;
  timeOffSale: string;
}

interface StadiumLocation {
  latitude: number;
  longitude: number;
}
export interface MatchData extends BaseMatch, StadiumLocation {}

// 백엔드에서 바꿔주면 이걸 사용할 것
// export type MainMatchType = Omit<MatchData, 'latitude' | 'longitude'> & {sport : string};
export type MainMatchType = Omit<
  MatchData,
  "latitude" | "longitude" | "stadiumName" | "awayTeamName" | "homeTeamName"
> & { sport: string; stadium: string; awayTeam: string; homeTeam: string };

export type SportName = {
  sport: "야구" | "축구" | "배구" | "농구";
};

export interface PageInfoProps {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface MatchType {
  content: MainMatchType[];
  pageInfo: PageInfoProps;
}

export interface InformationCardProp extends Omit<MatchData, "timeOnSale" | "timeOffSale"> {
  reservationStatus?: boolean;
}

export type GameHistoryType = { reservationId: number; game: InformationCardProp }[];

export interface MatchDataProps extends BaseMatch {
  id: string;
  sportName: string;
}

export interface SeatType {
  seatPosition: string;
  seatRow: number;
  seatNum: number;
}
export interface GameReservationType {
  createdAt: string;
  memberName: string;
  reservationStatus: "CANCELED" | "COMPLETED";
  seats: SeatType[];
  totalPrice: number;
  game: InformationCardProp;
}