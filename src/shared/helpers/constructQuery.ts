// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function constructQuery(searchParams:any, fields:string, keysToExtract:string[]) {
    const queryParams = [];

    keysToExtract.forEach(key => {
      const value = searchParams.get(key);
      if (value && value !== "all") {
        queryParams.push(`${key}=${value}`);
      }
    });
  if (fields.length > 0)  {
    queryParams.push(`fields=${fields}`);
  }
    
    const query = queryParams.join("&");
  
    return query;
  }
  