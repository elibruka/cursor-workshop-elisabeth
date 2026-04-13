import { Page } from "@/components/Page";
import { getPosts, Post } from "@/clients/api";
import { Layout } from "@snokam/core";
import { LayoutTheme, Padding, TransitionType } from "@snokam/core/layout";
import { GetServerSideProps } from "next";

interface HomePageProps {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const posts = await getPosts();
    return { props: { posts } };
  } catch (error) {
    return { props: { posts: [] } };
  }
};

const HomePage = ({ posts }: HomePageProps) => (
  <Page>
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
          <h1>Cursor Workshop</h1>
          <h2>All Blog Posts</h2>
          {posts.length === 0 ? (
            <p>No posts found</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {posts.map((post) => (
                <li
                  key={post.id}
                  style={{
                    borderBottom: "1px solid #e0e0e0",
                    paddingBottom: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.5rem" }}>{post.title}</h3>
                  <p style={{ margin: "0 0 0.5rem", color: "#555" }}>
                    {post.excerpt}
                  </p>
                  <small style={{ color: "#888" }}>
                    By {post.author} &middot;{" "}
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {post.tags.length > 0 && (
                      <> &middot; {post.tags.join(", ")}</>
                    )}
                  </small>
                </li>
              ))}
            </ul>
          )}
        </Layout.Section>
      </Layout.Content>
    </Layout.Container>
  </Page>
);

export default HomePage;
