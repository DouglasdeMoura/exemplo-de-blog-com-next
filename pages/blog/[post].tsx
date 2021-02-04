import { useRouter } from 'next/router';
import getAllPostSlugs from '../../utils/getAllPostSlugs';
import getPostBySlug from '../../utils/getPostBySlug';
import markdownToHtml from '../../utils/markdownToHtml';

// 1. Consulta ao banco
export const getStaticPaths = () => {
  const posts = getAllPostSlugs(process.env.POST_DIRECTORIES);

  return {
    paths: posts.map((slug) => ({
      params: {
        post: slug,
      },
    })),
    fallback: false,
  };
};

// 2. Preparação dos dados
export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.post, process.env.POST_DIRECTORIES);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post.data,
      content,
    },
  };
};

// 3. Exibição dos dados
const Post = ({
  title, content, date, description, tags,
}) => {
  const router = useRouter();

  if (!router.isFallback && !title) {
    return <>Post não encontrado</>;
  }

  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <footer>
        {tags && <ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
      </footer>
    </article>
  );
};

export default Post;
