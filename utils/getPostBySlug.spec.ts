import getPostBySlug from './getPostBySlug';

describe('getPostBySlug()', () => {
  it('deve retorna erro', () => {
    expect(() => {
      getPostBySlug('test_post', '_posts');
    }).toThrowError('Post não encontrado');

    expect(() => {
      getPostBySlug('test_post', 'test_dir');
    }).toThrowError('Diretório inválido');
  });
});
