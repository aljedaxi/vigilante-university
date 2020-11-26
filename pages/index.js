import ReactPlayer from 'react-player/lazy';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const DefaultHead = _ => <> <title>Create Next App</title> <link rel="icon" href="/favicon.ico" /> </>;
const DefaultFooter = _ => <> made by <a href="https://daxi.ml"><pre> daxi</pre></a> </>;

export const Layout = props => {
	const {
		head = <DefaultHead/>,
		footer = <DefaultFooter />,
		children,
	} = props;
  return (
    <div className={styles.container}>
      <Head>
				{head}
      </Head>

      <main className={styles.main}>
				{children}
      </main>

      <footer className={styles.footer}>
				{footer}
      </footer>
    </div>
  )
};

export default Layout;
