'use client'
import React,{useState} from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { toast } from "sonner"
import ReactDatePicker from 'react-datepicker'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = React.useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  const { user } =useUser();
  const client = useStreamVideoClient();
  const [values , setValues] = useState({
    dateTime : new Date(),
    description : '',
    link : '',
  })
  const [callDetails, setCallDetails] = useState<Call>()



  const createMeeting = async () => { 
  if(!client || !user) {
    console.log('Missing client or user'); // Debug log
    return;
  }
    try {
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call)  throw new Error('Failed to create call');
      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant meeting';

      await call.getOrCreate({
        data: {
          starts_at : startsAt,
          custom : {
            description
          }
        }
      })
      setCallDetails(call);
      if(!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast.success('Meeting created successfully!');
    }catch (error) {
      console.error('Error creating meeting:', error);
      toast.error('Failed to create meeting. Please try again.');
    }
  }

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`; ;
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        className='bg-orange'
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow"
        handleClick={() => router.push('/recordings')}
      />
      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-semibold leading-tight text-sky/80 uppercase tracking-wide">
              Add a description
            </label>
            <Textarea
              placeholder="What's this meeting about?"
              className="border-none bg-sidenav-background/80 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-sm font-semibold leading-tight text-sky/80 uppercase tracking-wide">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded-xl bg-sidenav-background/80 border-2 border-white/10 px-4 py-3 focus:outline-none focus:border-blue/50 focus:ring-4 focus:ring-blue/20 transition-all duration-300"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success('Link Copied!', {
              description: 'Meeting link has been copied to your clipboard'
            });
          }}
          image={'/icons/checked.svg'}
          buttonIcon="/icons/copy.svg"
          className="text-center "
          buttonText="Copy Meeting Link"
        />
      )}
        <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Enter meeting link..."
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-sidenav-background/80 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  )
}

export default MeetingTypeList
