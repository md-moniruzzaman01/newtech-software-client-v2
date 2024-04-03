// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function constructQuery(searchParams:any, fields:string, keysToExtract:string[],page?: number, limit?: number) {
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
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }
    
    const query = queryParams.join("&");
  
    return query;
  }
  