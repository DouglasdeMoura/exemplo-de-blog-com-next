import fs from 'fs';
import removeDateAndExtension from './removeDateAndExtension';

const getAllPostSlugs = (directory: string) => (
  fs.readdirSync(directory).map((item) => removeDateAndExtension(item))
);

export default getAllPostSlugs;
