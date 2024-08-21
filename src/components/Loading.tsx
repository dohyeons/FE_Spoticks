import spinner from '../assets/spinner.svg';

export default function Loading () {
  return(
    <div>
      <h3>로딩중입니다.</h3>
      <img src={spinner} alt="loading" />
    </div>
  )
}