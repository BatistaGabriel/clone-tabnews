import Head from "next/head";
import { PageLayout, Header, Text } from "@primer/react";

export default function DefaultLayout({ children, metadata = {} }) {
  return (
    <>
      <Head>
        <title>
          {metadata.title ? `${metadata.title} · Clone FinTab` : "Clone FinTab"}
        </title>

        {metadata.description && (
          <meta name="description" value={metadata.description} />
        )}
      </Head>

      <Header>
        <Header.Item full>
          <Header.Link href="/">
            <Text weight="semibold">Clone FinTab</Text>
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href="/login">
            <Text weight="semibold">Login</Text>
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href="/cadastro">
            <Text weight="semibold">Cadastrar</Text>
          </Header.Link>
        </Header.Item>
      </Header>

      <PageLayout>
        <PageLayout.Content>{children}</PageLayout.Content>
        <PageLayout.Footer divider="line">
          <Text size="small" weight="light">
            © {new Date().getFullYear()} Clone FinTab
          </Text>
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
