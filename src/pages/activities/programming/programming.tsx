import overview from "./articles.json"

export function Programming() {
    return (
        <>
            <h1>
                My programming activities
            </h1>

            <ul id="article-list">
                {overview.map((item) => (
                    <li>
                        <a href={"#/activity/programming/" + item.file.replace(/\.md$/, "")}>
                            {item.title} — {item.date}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}