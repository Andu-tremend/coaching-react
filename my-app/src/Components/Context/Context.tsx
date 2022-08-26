import React, {  createContext} from 'react';

export const appNamingData = {
    headerText: "Rick and morty - WIP ",
    bodyText: "Rick and morty characters list"
}

export const testContext = createContext(appNamingData);

