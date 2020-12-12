interface ICountValue {
  count: number;
}

const CountValue = (props: ICountValue) => <p>{props.count}</p>

export default CountValue;