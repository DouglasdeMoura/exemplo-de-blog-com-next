import getPosts from './getPosts';

describe('getPosts()', () => {
  it('deve retornar lista de arquivos no diretório', () => {
    expect(getPosts('.')).toBeTruthy();
  });
});
