import React from 'react';
import {stores} from "../context/stores";

export const useStores = () => React.useContext(stores);