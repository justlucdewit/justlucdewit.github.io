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
					<a href="#/home" class={url == '/' && 'active'}>
						Home
					</a>

					{/* <a href="#/activity" class={url == '/' && 'active'}>
						Activity
					</a> */}

					<a href="#/resume" class={url == '/' && 'active'}>
						Resume
					</a>
				</nav>
			</section>
		</header>
	);
}
