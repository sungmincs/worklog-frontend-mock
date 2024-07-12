import LogoImg from "/worklog.svg";

interface Props {
  width?: string;
  height?: string;
}

export const Logo = ({ width = "30px", height = "30px" }: Props) => {
  return <img src={LogoImg} width={width} height={height} />;
};
