export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          name={option.toLowerCase()}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
