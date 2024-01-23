import { Menu_API } from '../utils/constants';
import { useState ,useEffect } from 'react';

const useRestaurantMenu = (resId)=>{

    const [resMenu , setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
      const fetchMenu = async ()=>{
        const data = await fetch(Menu_API+resId);
        const response = await data.json();
        console.log("Menu Data fetched");
        setResMenu(response.data);
      }
    return resMenu;
}

export default useRestaurantMenu;