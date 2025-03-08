'use client';
import { useState } from 'react';
import { ZapCell } from '@/componets/ZapCell';


export default function Home() {
  const [selectedTrigger, setSelectedTrigger] = useState('');
  const [selectedAction, setSelectedAction] = useState<
    {
      availableActionId: string;
      availableActionName: string;
    }[]
  >([]);

  return (
    <div className="flex flex-col justify-center w-full min-h-screen bg-slate-200">
      <div className="flex justify-center w-full mt-8">
        <ZapCell
          name={selectedTrigger ? selectedTrigger : 'Trigger'}
          index={1}
          selectedAction={selectedAction}
          setSelectedAction={setSelectedAction}
        />
      </div>
      <div className="w-full pt-2 pb-2">
        {selectedAction.map((action, index) => (
          <div key={index} className="pt-4 flex justify-center">
            <ZapCell
              name={action.availableActionName ? action.availableActionName : 'Action'}
              index={index + 2}
              selectedAction={selectedAction}
              setSelectedAction={setSelectedAction}
            />
          </div>
        ))}
      </div>
    </div>
  );
}