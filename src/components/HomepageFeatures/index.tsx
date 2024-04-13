import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "前沿分享",
        Svg: require("@site/static/img/undraw_bookmarks_re_mq1u.svg").default,
        description: (
            <>
                精心挑选【开发工具🔧】【前沿技术🌊】
                <br />
                【精品好文📚】【提效插件🔥】
            </>
        ),
    },
    {
        title: "感悟分享",
        Svg: require("@site/static/img/undraw_mindfulness_8gqa.svg").default,
        description: <>日常生活中 所见👁所闻👂🏻 所思❓所想🧠</>,
    },
    {
        title: "壁纸分享",
        Svg: require("@site/static/img/undraw_art_museum_-8-or4.svg").default,
        description: <>精美壁纸 赏心悦目</>,
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
