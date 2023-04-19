import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option}>
          <button type='button' name={option} onClick={onLeaveFeedback} className={css.button}>{option}</button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}