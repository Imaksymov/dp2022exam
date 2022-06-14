import { Table5 } from "./table5";

export interface Rest1 {
    _embedded: {
        table5s: Table5[]
        },
        _links: {
        self: {
        href: string;
        },
        profile: {
        href: string;
        }
        },
        page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
        }

}