import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Heading2>
        Please leave a message.
        <br />
        After the wedding, it will be delivered to the bride and groom.
      </Heading2>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;
