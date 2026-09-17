import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI / ML',
    icon: '🤖',
    description: (
      <>
        機械学習や生成AIの実装メモ、検証ノート、学びの整理を中心に記録していきます。
      </>
    ),
  },
  {
    title: 'TypeScript',
    icon: '⚛️',
    description: (
      <>
        React Native やフロントエンド開発で得た知見を、実務向けにわかりやすくまとめていきます。
      </>
    ),
  },
  {
    title: 'Swift / Java',
    icon: '📱',
    description: (
      <>
        モバイル開発やバックエンド周辺の技術にも触れ、日々の実装で役立つ備忘録を残していきます。
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon} aria-hidden="true">{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
