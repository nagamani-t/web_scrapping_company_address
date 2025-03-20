export declare const fetchCompanyAddress: (req: any) => Promise<{
    status: string;
    msg: string;
    data: {
        addresses: {
            companyName: any;
            address: any;
        }[];
        source: string;
    };
} | {
    status: string;
    msg: string;
}>;
export declare const scrapeAddressFromOpenCorporates: (company: any) => Promise<{
    status: string;
    msg: string;
    data?: undefined;
} | {
    status: string;
    msg: string;
    data: {
        addresses: {
            companyName: any;
            address: any;
        }[];
        source: string;
    };
}>;
