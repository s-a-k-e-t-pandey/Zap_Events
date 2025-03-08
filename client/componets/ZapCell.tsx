import { PrimaryButton } from "./buttons/PrimaryButton";

export const ZapCell = ({
  name,
  index,
  selectedAction,
  setSelectedAction,
}: {
  name?: string;
  index: number;
  selectedAction: { availableActionId: string; availableActionName: string }[];
  setSelectedAction: React.Dispatch<
    React.SetStateAction<
      {
        availableActionId: string;
        availableActionName: string;
      }[]
    >
  >;
}) => {
  return (
    <div>
      <div className="border border-dashed border-black py-8 px-4 flex w-[300px] justify-between cursor-pointer rounded-md pt-2 pb-2">
        <div className="flex flex-col text-xl">
          <div className="border rounded-lg px-1">{name}</div>
          <div className="font-semibold flex top-0">{index}:</div>
        </div>
      </div>
      <div className="flex justify-center item-center pt-1">
        <button
          onClick={() => {
            setSelectedAction((a) => [
              ...a,
              {
                availableActionId: "",
                availableActionName: "",
              },
            ]);
          }}
        >
         <div className="flex justify-center item-center text-2xl max-w-0 rounded-full text-indigo-700">|</div>
          <div className="flex justify-center item-center text-3xl max-w-0 rounded-full text-indigo-700">
            +
          </div>
         <div className="flex justify-center item-center text-2xl max-w-0 rounded-full text-indigo-700">|</div>
        </button>
      </div>
    </div>
  );
};