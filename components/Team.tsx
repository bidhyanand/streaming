import { imageUrl } from "../data";

interface Iprops {
  name: string;
}
const TeamImage = ({ name }: Iprops) => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <img
        src={`${imageUrl}/team/${name}.png`}
        alt={name}
        style={{ height: 30, width: 50 }}
      />
    </>
  );
};
export default TeamImage;
