import "./Headings.css";

interface Props {
  title: string;
  text: string;
}

const Headings = ({ title, text }: Props) => {
  return (
    <div className="headings">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Headings;
