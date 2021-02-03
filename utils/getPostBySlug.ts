import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const removeDateAndExtension = (str) => str.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}_/, '');

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
  const { data } = matter(postPath);

  return data;
};

export default getPostBySlug;
