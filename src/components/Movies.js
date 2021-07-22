// 예제 3 - 영화 목록 보여주기
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { typeState, movieState } from '../recoil/movieState';
import './styles.css';

export default function Movies() {
	const type = useRecoilValue(typeState);
	const movies = useRecoilValueLoadable(movieState);

	const getImageUrl = (val) => {
		return `https://image.tmdb.org/t/p/w500/${val}`;
	};

	let content = null;
	switch (movies.state) {
		case 'hasValue': {
			content = (
				<div className="movie-contaier">
					{movies.contents.map((movie) =>
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
			);
			break;
		}

		case 'hasError': {
			content = '데이터를 불러오는 중 에러가 발생하였습니다.';
			break;
		}

		case 'loading':
		default: {
			content = 'Loading...';
		}
	}

	return (
		<div>
			<h2>{type}</h2>
			{content}
		</div>
	);
}
