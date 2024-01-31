
export const interpolation = (data: string, metadata: Record<string, unknown>) => {
 const newData = Object.entries(metadata).reduce((results, [key, value]) => {
  if (!results) {
   const newData = data.replace(`{{${key}}}`, value as string)
   return newData;
  }
  const newData = data.replace(`{{${key}}}`, value as string);
  return newData;
 }, "");
  

 return newData;
}