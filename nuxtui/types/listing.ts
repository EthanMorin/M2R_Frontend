export interface Listing {
    id: string;
    listingId: string;
    listingKey: string;
    propertyType: string;
    propertySubType: string;
    status: string;
    standardStatus: string;
    address: {
        streetNumber: string;
        streetDirPrefix?: string;
        streetName: string;
        streetSuffix?: string;
        city: string;
        stateOrProvince: string;
        postalCode: string;
        unparsedAddress: string;
    };
    coordinates?: {
        latitude: number;
        longitude: number;
    };
    currentPrice: number;
    listPrice: number;
    associationFee?: number;
    associationFeeFrequency?: string;
    taxAmount?: number;
    taxYear?: number;
    yearBuilt: number;
    buildingAreaTotal: number;
    lotSizeAcres?: number;
    lotSizeSquareFeet?: number;
    bedsTotal: number;
    bathsTotal: number;
    garageSpaces?: number;
    stories?: number;
    roomsTotal?: number;
    elementarySchool?: string;
    middleOrJuniorSchool?: string;
    highSchool?: string;
    publicRemarks: string;
    inclusions?: string;
    listingContractDate: string;
    originalOnMarketTimestamp: string;
    modificationTimestamp: string;
    photosCount: number;
    videosCount: number;
    virtualToursCount: number;
    listingAgent: {
        firstName: string;
        lastName: string;
        fullName: string;
        email?: string;
        phone?: string;
        officeName: string;
    };
}

interface RawListing {
    Id: string;
    ResourceUri: string;
    StandardFields: {
        ListingId: string;
        ListingKey: string;
        PropertyType: string;
        PropertySubType: string;
        StandardStatus: string;
        MlsStatus: string;
        StreetNumber: string;
        StreetDirPrefix?: string;
        StreetName: string;
        StreetSuffix?: string;
        City: string;
        StateOrProvince: string;
        PostalCode: string;
        UnparsedAddress: string;
        Latitude?: number;
        Longitude?: number;
        CurrentPrice: number;
        ListPrice: number;
        AssociationFee?: number;
        AssociationFeeFrequency?: string;
        TaxAmount?: number;
        TaxYear?: number;
        YearBuilt: number;
        BuildingAreaTotal: number;
        LotSizeAcres?: number;
        LotSizeSquareFeet?: number;
        BedsTotal: number;
        BathsTotal: number;
        GarageSpaces?: number;
        Stories?: number;
        RoomsTotal?: number;
        ElementarySchool?: string;
        MiddleOrJuniorSchool?: string;
        HighSchool?: string;
        PublicRemarks: string;
        Inclusions?: string;
        ListingContractDate: string;
        OriginalOnMarketTimestamp: string;
        ModificationTimestamp: string;
        PhotosCount: number;
        VideosCount: number;
        VirtualToursCount: number;
        ListAgentFirstName: string;
        ListAgentLastName: string;
        ListAgentEmail?: string;
        ListAgentPreferredPhone?: string;
        ListOfficeName: string;
    };
}

export function transformListing(raw: RawListing): Listing {
    const sf = raw.StandardFields;
    
    return {
        id: raw.Id,
        listingId: sf.ListingId,
        listingKey: sf.ListingKey,
        
        propertyType: sf.PropertyType,
        propertySubType: sf.PropertySubType,
        status: sf.MlsStatus,
        standardStatus: sf.StandardStatus,
        
        address: {
            streetNumber: sf.StreetNumber,
            streetDirPrefix: sf.StreetDirPrefix,
            streetName: sf.StreetName,
            streetSuffix: sf.StreetSuffix,
            city: sf.City,
            stateOrProvince: sf.StateOrProvince,
            postalCode: sf.PostalCode,
            unparsedAddress: sf.UnparsedAddress,
        },
        
        coordinates: sf.Latitude && sf.Longitude ? {
            latitude: sf.Latitude,
            longitude: sf.Longitude,
        } : undefined,
        
        currentPrice: sf.CurrentPrice,
        listPrice: sf.ListPrice,
        associationFee: sf.AssociationFee,
        associationFeeFrequency: sf.AssociationFeeFrequency,
        taxAmount: sf.TaxAmount,
        taxYear: sf.TaxYear,
        
        yearBuilt: sf.YearBuilt,
        buildingAreaTotal: sf.BuildingAreaTotal,
        lotSizeAcres: sf.LotSizeAcres,
        lotSizeSquareFeet: sf.LotSizeSquareFeet,
        bedsTotal: sf.BedsTotal,
        bathsTotal: sf.BathsTotal,
        garageSpaces: sf.GarageSpaces,
        stories: sf.Stories,
        roomsTotal: sf.RoomsTotal,
        
        elementarySchool: sf.ElementarySchool,
        middleOrJuniorSchool: sf.MiddleOrJuniorSchool,
        highSchool: sf.HighSchool,
        
        publicRemarks: sf.PublicRemarks,
        inclusions: sf.Inclusions,
        listingContractDate: sf.ListingContractDate,
        originalOnMarketTimestamp: sf.OriginalOnMarketTimestamp,
        modificationTimestamp: sf.ModificationTimestamp,
        
        photosCount: sf.PhotosCount,
        videosCount: sf.VideosCount,
        virtualToursCount: sf.VirtualToursCount,
        
        listingAgent: {
            firstName: sf.ListAgentFirstName,
            lastName: sf.ListAgentLastName,
            fullName: `${sf.ListAgentFirstName} ${sf.ListAgentLastName}`,
            email: sf.ListAgentEmail,
            phone: sf.ListAgentPreferredPhone,
            officeName: sf.ListOfficeName,
        },
    };
}

// Optional: Add an enum for property types
export enum PropertyType {
    Residential = "Residential",
    Commercial = "Commercial",
    Land = "Land",
    // Add other types as needed
}

// Optional: Add an enum for standard statuses
export enum StandardStatus {
    Active = "Active",
    Pending = "Pending",
    Sold = "Sold",
    // Add other statuses as needed
}
