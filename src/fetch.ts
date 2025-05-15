/**
 * Query warframe API for weapondata
 * Fetch weapon query and returns 1 closest result.
 * @return json format of the closest result.
 */
export async function queryWeapon(weapon: string){
    const url = `https://api.warframestat.us/items/${weapon}`;
    try{
        //use warframe status API endpoint
        const res = await fetch(url);

        if(!res.ok) throw new Error('Error: '+res.status);
        const json = await res.json();

        return json;
    }catch(e){
        console.error(e);
    }
}
