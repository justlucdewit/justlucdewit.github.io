import { useState, useEffect } from "preact/hooks";
import { remark } from 'remark';
import remarkHtml from "remark-html";

export function Article(props) {
    const markdownFile = props.params.name;
    const markdownPath = `/articles/programming/${markdownFile}.md`;
    const [markdownCode, setMarkdownCode] = useState("");

    useEffect(() => {
        function preprocess(t) {
            t = t.replaceAll('%back_button%', '<a href="#/activity/programming" style="text-decoration: none; color: white; margin: 0;">&lt; back</a>');

            return t;
        }

        async function getArticle() {
            const markdownCode = await fetch(markdownPath).then(res => res.text());
            const markdownOutput = await remark().use(remarkHtml).process(markdownCode);
            setMarkdownCode(preprocess(String(markdownOutput)));
        }

        if (!markdownCode) {
            getArticle();
        }
    });

    return (
        <>
            <article dangerouslySetInnerHTML={{ __html: markdownCode }}>
            </article>
        </>
    );
}