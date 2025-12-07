import { useState } from 'react';
import styled from '@emotion/styled';
import { googleSheetsService } from '../../services/googleSheets';

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      alert('Please fill in your name and message. 😢');
      return;
    }

    // Basic validation
    if (name.length > 50) {
      alert('Name must be less than 50 characters. 😅');
      return;
    }
    
    if (message.length > 500) {
      alert('Message must be less than 500 characters. 😅');
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await googleSheetsService.appendEntry({
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
      });

      if (success) {
        setName('');
        setMessage('');
        alert('Terima kasih sudah mengonfirmasi! 💝');
      } else {
        alert('Maaf, terjadi kesalahan saat mengonfirmasi. Silakan coba lagi. 😢');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Maaf, terjadi kesalahan saat mengonfirmasi. Silakan coba lagi. 😢');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="Nama"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="Catatan untuk kami..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: white;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
    border-color: #999;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #666;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
export default CommentForm;
