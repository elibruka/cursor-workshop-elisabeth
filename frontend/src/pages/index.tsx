import { Page } from "@/components/Page";
import { Banner } from "@/components/Banner";
import { getPosts, Post } from "@/clients/api";
import { Layout } from "@snokam/core";
import { LayoutTheme, Padding, TransitionType } from "@snokam/core/layout";
import { GetServerSideProps } from "next";

interface HomePageProps {
  post: Post | null;
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const posts = await getPosts({ limit: 1 });
    return { props: { post: posts[0] || null } };
  } catch (error) {
    return { props: { post: null } };
  }
};

const HomePage = ({ post }: HomePageProps) => (
  <Page>
    <Banner
      title="Cursor Workshop"
      subtitle="Utforsk AI-assistert utvikling og bygg fremtiden raskere enn noensinne."
      badge="Workshop"
    />
    <Layout.Container
      theme={LayoutTheme.Light}
      transitions={{
        bottom: {
          type: TransitionType.Wave,
        },
      }}
    >
      <Layout.Content>
        <Layout.Section padding={{ bottom: Padding.Large }}>
          {post ? (
            <>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </>
          ) : (
            <p>No posts found</p>
          )}
        </Layout.Section>
      </Layout.Content>
    </Layout.Container>
  </Page>
);

export default HomePage;
