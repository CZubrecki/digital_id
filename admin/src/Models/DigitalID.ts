export interface DigitalID {
    customerNumber: string | undefined;
    givenName: string | undefined;
    surname: string | undefined;
    eyes: string | undefined;
    height: string | undefined;
    sex: string | undefined;
    address: string | undefined;
    city: string | undefined;
    province: string | undefined;
    dateOfBirth: Date | null;
}