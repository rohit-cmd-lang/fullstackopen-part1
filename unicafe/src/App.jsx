import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={() => handleClick(text)}>{text}</button>;
};
const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positivePercentage = (good / all) * 100;
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positivePercentage} />
        </tbody>
      </table>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {text === "positive" ? "%" : null}
      </td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleClick = (text) => {
    if (text === "good") {
      setGood((g) => g + 1);
      setFeedbackGiven(true);
    } else if (text === "neutral") {
      setNeutral((n) => n + 1);
      setFeedbackGiven(true);
    } else if (text === "bad") {
      setBad((b) => b + 1);
      setFeedbackGiven(true);
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClick} text="good" />
      <Button handleClick={handleClick} text="neutral" />
      <Button handleClick={handleClick} text="bad" />

      {feedbackGiven ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
