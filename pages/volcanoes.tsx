import { GetStaticProps } from "next";

const Vulcano: React.FC = ({ SurfingActivities }: any) => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <div className=" text-6xl mt-5">{SurfingActivities.name}</div>
        <div className="text-3xl max-w-[700px] text-center mb-5">
          {SurfingActivities.description}
        </div>
        <img
          src={SurfingActivities.image}
          className="w-full h-[600px] object-cover"
          alt="surfing-activity"
        />
      </div>
      {SurfingActivities.activities.map((activity: any) => {
        return (
          <ul className="text-3xl ml-5 text-center my-5">
            <li>{activity.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://web-dev.dev.kimo.ai/v1/activities/Volcanoes`
  );
  const data = await res.json();
  const SurfingActivities = data;

  return {
    props: {
      SurfingActivities,
    },
  };
};

export default Vulcano;
