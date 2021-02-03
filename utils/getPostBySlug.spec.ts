import getPostBySlug from './getPostBySlug';

const posts = [
  '2021-02-03_test_post.md',
  '2021-02-03_post1.md',
  '2021-02-03_post2.md',
  '2021-02-03_post3.md',
];

describe('getPostBySlug()', () => {
  it('deve retornar o post', () => {
    expect(getPostBySlug('test_post', posts)).toEqual(0);
  });

  it('deve retornar -1 quando não encontrar o post', () => {
    expect(getPostBySlug('test_post_inexistent', posts)).toEqual(-1);
  });
});
