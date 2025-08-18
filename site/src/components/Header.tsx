import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<section>
				<h2 id="title">
					Luke_
				</h2>

				<nav>
					<a href="/" class={url == '/' && 'active'}>
						Home
					</a>
				</nav>
			</section>
		</header>
	);
}
