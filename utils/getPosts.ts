import fs from 'fs';

const getPosts = (directory: string): string[] => fs.readdirSync(directory);

export default getPosts;
