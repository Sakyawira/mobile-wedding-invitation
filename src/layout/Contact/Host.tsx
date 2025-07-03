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
`;

const HostContainer = styled.div`
  gap: 8px;
  font-family: HSSanTokki20-Regular, serif;
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
`;

// const RelationText = styled.div`
//   font-style: normal;
//   line-height: 26px;
//   width: 50px;
//   display: flex;
//   gap: 6px;
// `;

const Relation = styled.div`
  width: inherit;
`;
