import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import removeDateAndExtension from './removeDateAndExtension';

const getPostBySlug = (slug, directory) => {
  let posts;

  try {
    posts = fs.readdirSync(directory);
  } catch (error) {
    throw new Error('Diretório inválido');
  }

  const slugs = [];

  posts.map((post) => slugs.push(removeDateAndExtension(post)));

  const postIndex = slugs.findIndex((item) => item === slug);

  if (postIndex === -1) throw new Error('Post não encontrado');

  const postPath = fs.readFileSync(join(directory, posts[postIndex]), 'utf8');
  const { data, content } = matter(postPath);

  return { data, content };
};

export default getPostBySlug;
