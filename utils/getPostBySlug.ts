import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const getPostBySlug = (slug, directory) => {
  const removeDateAndExtension = (str) => str.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}_/, '');
  let posts;

  try {
    posts = fs.readdirSync(directory);
  } catch (error) {
    throw new Error('Diretório inválido');
  }

  const normalizedPostsList = [];

  posts.map((post) => normalizedPostsList.push(removeDateAndExtension(post)));

  const postID = normalizedPostsList.findIndex((item) => item === slug);

  if (postID === -1) throw new Error('Post não encontrado');

  const postPath = fs.readFileSync(join(directory, posts[postID]), 'utf8');
  const { data } = matter(postPath);

  return data;
};

export default getPostBySlug;
