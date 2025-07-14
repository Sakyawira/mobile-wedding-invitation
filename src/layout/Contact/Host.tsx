import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Host = () => {
  const { groom, bride, groomFather, brideFather } = data.greeting.host;
  return (
    <>
      <HostContainer>
        <h2>Groom</h2>
        <HostInfo person={groom} />
        <HostInfo person={groomFather as BrideAndGroom} />
        <span role="img" aria-label="pink heart">💗</span>
        <h2>Bride</h2>
        <HostInfo person={bride} />
        <HostInfo person={brideFather as BrideAndGroom} />
      </HostContainer>
    </>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
    <HostDetails>
      {person.parents && (
        <>
          {person.parents.map((parent, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' · '}
              {parent.name}
            </React.Fragment>
          ))}
        </>
      )}
      <Relation>{person.relation}</Relation>
      <HighlightedName>{person.name}</HighlightedName>
    </HostDetails>
  );
};

const HighlightedName = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: #4f4f4f;
  margin-right: 5px;
  font-style: italic;
  word-break: break-word;
  hyphens: auto;
  
  /* Large phones and tablets */
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  
  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    font-size: 0.95rem;
  }
  
  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;

const HostContainer = styled.div`
  gap: 8px;
  font-family: HSSanTokki20-Regular, serif;
  max-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`;

const HostDetails = styled.div`
  padding: 10px 8px;
  justify-content: center;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  font-weight: 700;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  white-space: normal;
  flex-wrap: wrap;
  
  /* Large phones and tablets */
  @media (max-width: 480px) {
    padding: 8px 4px;
    gap: 4px;
    font-size: 0.95rem;
  }
  
  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    padding: 6px 2px;
    gap: 3px;
    font-size: 0.9rem;
  }
  
  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    padding: 4px 1px;
    gap: 2px;
    font-size: 0.85rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    padding: 4px 0px;
    gap: 2px;
    font-size: 0.8rem;
  }
`;

const Relation = styled.div`
  width: auto;
  min-width: 0;
  word-break: break-word;
  hyphens: auto;
  
  /* Large phones and tablets */
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  /* Galaxy S20/S24 Ultra and similar */
  @media (max-width: 412px) {
    font-size: 0.9rem;
  }
  
  /* Galaxy S20 regular and similar */
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;