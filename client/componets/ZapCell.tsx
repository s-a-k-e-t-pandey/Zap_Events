import { PrimaryButton } from "./buttons/PrimaryButton";
import React, { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

interface ZapCellProps {
  name: string;
  index: number;
  onClick: ()=>void
  selectedAction: Array<{
    availableActionId: string;
    availableActionName: string;
  }>;
  setSelectedAction: React.Dispatch<React.SetStateAction<Array<{
    index: number;
    availableActionId: string;
    availableActionName: string;
  }>>>;
}

export const ZapCell: React.FC<ZapCellProps> = ({ name, index, onClick, selectedAction, setSelectedAction }) => {
  if (!name) {
    return <div>Invalid cell data</div>;
  }

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" hover:shadow-lg transition-shadow duration-300">
        <div className="p-4 sm:p-6">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              <div onClick={onClick} className="border border-dashed hover:border-double border-black py-8 px-4 flex w-[300px] justify-between cursor-pointer rounded-md pt-2 pb-2">
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
                        index: index+1,
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
          )}
        </div>
      </div>
    </div>
  );
};