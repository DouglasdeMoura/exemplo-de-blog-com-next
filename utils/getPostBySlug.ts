const getPostBySlug = (slug: string, posts: string[]): number => {
  const removeDateAndExtension = (str) => str.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}_/, '');

  const normalizedPostsList = [];
  posts.map((post) => normalizedPostsList.push(removeDateAndExtension(post)));

  return normalizedPostsList.findIndex((item) => item === slug);
};

export default getPostBySlug;
