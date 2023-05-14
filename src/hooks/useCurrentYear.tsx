import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const useCurrentYear = () => {
    const currentYear = new Date().getFullYear();

    return currentYear;
}