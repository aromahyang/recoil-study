// 예제 3 - 영화 목록 보여주기
import { useRecoilValue } from 'recoil';
import { typeState, movieState } from '../recoil/movieState';
import './styles.css';

export default function Movies() {
	const type = useRecoilValue(typeState);
	const movies = useRecoilValue(movieState);

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
