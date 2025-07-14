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
  
  /* Galaxy S20 specific breakpoint (360px width) */
  @media (max-width: 360px) {
    font-size: 0.95rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const HostContainer = styled.div`
  gap: 8px;
  font-family: HSSanTokki20-Regular, serif;
  max-width: 100%;
  padding: 0 8px;
`;

const HostDetails = styled.div`
  padding: 10px 20px;
  justify-content: center;
  white-space: nowrap;
  display: flex;
  gap: 6px;
  text-align: center;
  align-items: center;
  font-weight: 700;
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  
  /* Galaxy S20 specific breakpoint (360px width) */
  @media (max-width: 360px) {
    padding: 8px 16px;
    gap: 4px;
    font-size: 0.9rem;
    white-space: normal;
    flex-wrap: wrap;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    padding: 6px 12px;
    gap: 3px;
    font-size: 0.85rem;
  }
`;


const Relation = styled.div`
  width: inherit;
  
  /* Galaxy S20 specific breakpoint (360px width) */
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
  
  /* Extra small devices */
  @media (max-width: 320px) {
    font-size: 0.85rem;
  }
`;