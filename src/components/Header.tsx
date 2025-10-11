import { useLocation } from 'preact-iso';
import { useState } from 'preact/hooks';

export function Header() {
	const { url } = useLocation();

	const [openTab, setOpenTab] = useState(null);

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

					<a class={url == '/' && 'active'} onClick={() => openTab == 'activity' ? setOpenTab(null) : setOpenTab('activity')}>
						Activity

						{
							openTab == 'activity' && (
								<div className="sub-menu">
									<a href="#/activity/speedcubing" class={url == '/' && 'active'}>
										Speedcubing
									</a>

									{/* <a href="#/activity/dreaming" class={url == '/' && 'active'}>
										Dreaming
									</a> */}

									{/* <a href="#/activity/programming" class={url == '/' && 'active'}>
										Programming
									</a> */}
								</div>
							)
						}
					</a>

					<a href="#/resume" class={url == '/' && 'active'}>
						Resume
					</a>
				</nav>
			</section>
		</header>
	);
}
