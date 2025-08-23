import { useEffect, useState } from 'react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client || !id) return;
    
    const callId = Array.isArray(id) ? id[0] : id;
    
    const loadCall = async () => {
      try {
        const { calls } = await client.queryCalls({
          filter_conditions: { id: { $eq: callId } },
        });
        
        debugger;
        console.log("calls:", calls);
        if (calls.length > 0) {
          setCall(calls[0]);
        }

        setIsCallLoading(false);
      } catch (error) {
        console.error("Error loading call:", error);
        setIsCallLoading(false);
      }
    };

    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
};
