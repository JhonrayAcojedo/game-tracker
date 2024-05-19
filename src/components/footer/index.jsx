import React from 'react'

const Footer = () => {
  return (
    <footer className={`h-[300px] bg-black bg-cover flex items-end`}>
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex justify-center gap-x-40">
					<div className="grid grid-cols gap-10 ">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">About me</h2>
							<ul className="text-white dark:text-white font-medium">
								<li className="mb-4">
									<a
										href="#"
										className="hover:underline"
									>
										Who am I?
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:underline"
									>
										Experiences
									</a>
								</li>
							</ul>
						</div>
					</div>
                    <div className="grid gap-10">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow me</h2>
							<ul className="text-white font-medium">
								<li className="mb-4">
									<a
										href="https://facebook.com"
										className="hover:underline "
									>
										Facebook
									</a>
								</li>
								<li className="mb-4">
									<a
										href="https://github.com/JhonrayAcojedo/game-tracker"
										className="hover:underline "
									>
										Github
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com"
										className="hover:underline"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-white sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-center">
					<span className="text-sm text-white sm:text-center dark:text-white">
						© 2024{' '}
						<a
							href="#"
							className="hover:underline"
						>
							Jhonray Acojedo
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
  )
}

export default Footer