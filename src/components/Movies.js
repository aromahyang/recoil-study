import { useRecoilValue } from 'recoil';
import { typeStatus, movieStatus } from '../recoil/movieStatus';
import './styles.css';

export default function Movies() {
	const type = useRecoilValue(typeStatus);
	const movies = useRecoilValue(movieStatus);

	const getImageUrl = (val) => {
		return `https://image.tmdb.org/t/p/w500/${val}`;
	};

	return (
		<div>
			<h2>{type}</h2>
			<div className="movie-contaier">
				{movies.map((movie) =>
					<div className="movie-card">
						<img
							alt="poster"
							src={getImageUrl(movie.poster_path)}
							width={200}
							height={300}
						/>
						<p>{movie.title}</p>
					</div>
				)}
			</div>
		</div>
	);
}
