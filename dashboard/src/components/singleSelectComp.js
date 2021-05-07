import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { incRowAction, decRowAction } from '../actions/filterAction';

const SingleSelect = () => {
	//dispatch buttons
	const dispatch = useDispatch();

	//access rootReducer
	{
		/* const { yearnum, isLoding } = useSelector((state) => state.overview); */
	}

	const incRow = () => {
		dispatch(incRowAction());
	};
	const decRow = () => {
		dispatch(decRowAction());
	};

	return (
		<CurrentMode>
			<button onClick={decRow}>Decrease</button>
			<ul>
				<li>
					<input type="checkbox" />
				</li>
				<li>
					<input type="checkbox" />
				</li>
				<li>
					<input type="checkbox" />
				</li>
				<li>
					<input type="checkbox" />
				</li>
			</ul>
			<h3>10 YEARS</h3>
			<button onClick={incRow}>Increase</button>
		</CurrentMode>
	);
};

export default SingleSelect;

const CurrentMode = styled.div`
  padding: 15px;

  border-radius: 10px 10px 0px 0px;
  grid-column: 1;
  grid-row: 1;
  box-shadow: inset 2px 3px 10px hsla(0, 0%, 0%, 0.333);
`;
